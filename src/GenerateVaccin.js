import React, { useEffect, useState } from 'react';
import { Card, Icon, Grid, Input, Button } from 'semantic-ui-react';

import { useSubstrate } from './substrate-lib';
import { TxButton } from './substrate-lib/components';
import utils from './substrate-lib/utils';

function Main (props) {
  const { api } = useSubstrate();
  const [nodeInfo, setNodeInfo] = useState({});
  const [ vaccinString, setVaccinString ] = useState("Empty");
  const [status, setStatus] = useState('');
  const [interxType, setInterxType] = useState('QUERY');
  const [unsub, setUnsub] = useState();
  const [totalVaccin, setTotalVaccin] = useState(0);
  
  
  useEffect(() => {
    const getInfo = async () => {
      try {
        const [chain, nodeName, nodeVersion] = await Promise.all([
          api.rpc.system.chain(),
          api.rpc.system.name(),
          api.rpc.system.version()
        ]);
        setNodeInfo({ chain, nodeName, nodeVersion });
      } catch (e) {
        console.error(e);
      }
    };
    getInfo();
  }, [api.rpc.system]);

  const divWidthStyle = {
    width: '100%',
    display: 'block!important'
  };

  const cardWidthStyleLeft = {
    width: '49%',
    float: 'left'
  };

  const cardWidthStyleRight = {
    width: '49%',
    float: 'right'
  };

  const divWidthStylePlusTop = {
    top: '20px',
    width: '100%'
  };

  const isNumType = type =>
    utils.paramConversion.num.some(el => type.indexOf(el) >= 0);

   const transformParams = (paramFields, inputParams, opts = { emptyAsNull: true }) => {
    // if `opts.emptyAsNull` is true, empty param value will be added to res as `null`.
    //   Otherwise, it will not be added
    const paramVal = inputParams.map(inputParam => {
      // To cater the js quirk that `null` is a type of `object`.
      if (typeof inputParam === 'object' && inputParam !== null && typeof inputParam.value === 'string') {
        return inputParam.value.trim();
      } else if (typeof inputParam === 'string') {
        return inputParam.trim();
      }
      return inputParam;
    });
    const params = paramFields.map((field, ind) => ({ ...field, value: paramVal[ind] || null }));

    return params.reduce((memo, { type = 'string', value }) => {
      if (value == null || value === '') return (opts.emptyAsNull ? [...memo, null] : memo);

      let converted = value;

      // Deal with a vector
      if (type.indexOf('Vec<') >= 0) {
        converted = converted.split(',').map(e => e.trim());
        converted = converted.map(single => isNumType(type)
          ? (single.indexOf('.') >= 0 ? Number.parseFloat(single) : Number.parseInt(single))
          : single
        );
        return [...memo, converted];
      }

      // Deal with a single value
      if (isNumType(type)) {
        converted = converted.indexOf('.') >= 0 ? Number.parseFloat(converted) : Number.parseInt(converted);
      }
      return [...memo, converted];
    }, []);
  };

  const queryResHandler = result =>
  result.isNone ? setStatus('guuci!') : setStatus(result.toString());

  const queryResHandlerTotal = result =>
  result.isNone ? setTotalVaccin('None') : setTotalVaccin(result.toString());

const query = async (optional = 'accountForCommodity') => {
  const transformed = transformParams(paramFields, inputParams);
  console.log(optional);
  try{
    if(optional == 'accountForCommodity'){
      const unsub = await api.query[buttonProps.attrs.palletRpc][optional](...transformed, queryResHandler);
    }else if(optional == 'total'){
      console.log('starting');
      const unsub = await api.query[buttonProps.attrs.palletRpc][optional](...transformed, queryResHandlerTotal);
      console.log('executed total')
    }
  }catch(e){
    setStatus('Invalid Vaccin. Do not use!');
  }
  setUnsub(() => unsub);
};
  function checkVaccin() {
    console.log(`Check ${vaccinString}`);
  }
  function handleInputChange(e) {
    setVaccinString(
         e.target.value
    );
}
const inputParams = [
  { type: 'CommodityId', value: vaccinString }
];

const paramFields = [
  { name: 'owner_account', optional: false, type:'AccountId'}
];
let buttonProps = { 
  accountPair: {...props.accountPair},
  setStatus,
  attrs:{ interxType:interxType, palletRpc:'commodities', callable:'accountForCommodity', inputParams, paramFields }
};


console.log(status)

  return (
    <div style={divWidthStyle}>
    <Grid.Column style={divWidthStyle}>
      <Card style={cardWidthStyleLeft}>
        <Card.Content>
          <Card.Header>Check vaccin</Card.Header>
          <Card.Meta>
            <span>Check if the vaccin is a valid vaccin.</span>
          </Card.Meta>
          <Card.Description>
            
            <Input type="text" onChange={handleInputChange} />
            <Button 
                 primary
                  style={{'float' : 'right'}} onClick={()=>{query()}}>Check Vaccin</Button>
            
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name='check' />{totalVaccin}
        </Card.Content>
      </Card>
      </Grid.Column>
      <Grid.Column>
      <Card style={cardWidthStyleRight}>
        <Card.Content>
          <Card.Header>Status</Card.Header>
          <Card.Meta>
  <span>{(status != 'Invalid Vaccin. Do not use!')? <Icon name='check' style={{'color': 'green'}} size={'massive'}/> : <Icon name='close' style={{'color': 'red'}} size={'massive'} /> }{status}</span>
          </Card.Meta>
          
        </Card.Content>
        
      </Card>
    </Grid.Column>
    <br /><br />
    
    </div>
  );
}

export default function GenerateVaccin (props) {
  const { api } = useSubstrate();
  return api.rpc &&
    api.rpc.system &&
    api.rpc.system.chain &&
    api.rpc.system.name &&
    api.rpc.system.version ? (
      <Main {...props} />
    ) : null;
}
