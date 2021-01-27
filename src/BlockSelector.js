import React, { useEffect, useState } from 'react';
import { Card, Icon, Grid } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import { useSubstrate } from './substrate-lib';
import { TxButton } from './substrate-lib/components';
import utils from './substrate-lib/utils';

function Main (currentAccount) {
  const { api } = useSubstrate();
  const [nodeInfo, setNodeInfo] = useState({});
  const [status, setStatus] = useState(null);
  const [statusQuery, setStatusQuery] = useState(null);
  const [interxType, setInterxType] = useState('EXTRINSIC');
  const [interxQueryType, setInterxQueryType] = useState('QUERY');
  const [unsub, setUnsub] = useState(null);
  
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

  const { keyring } = useSubstrate();
  // Get the list of accounts we possess the private key for
  const keyringOptions = keyring.getPairs().map(account => ({
    key: account.address,
    value: account.address,
    text: account.meta.name.toUpperCase(),
    icon: 'user'
  }));

  const divWidthStyle = {
    width: '66%'
  };

  const cardWidthStyle = {
    width: '100%'
  };

  
  const blocks = ['block1', 'block2', 'block3', 'block4'];
  //GetBlocks();
  
  async function GetBlocks() {
    const inputParamsQuery = [
      { type: 'AccountId', value: currentAccount.account }
    ];
  
    const paramFieldsQuery = [
      { name: 'owner_account', optional: false, type:'AccountId'}
    ];
    var palletRpc = 'commodities';
    var callable = 'commoditiesForAccount';
    const transformed = transformParams(paramFieldsQuery, inputParamsQuery);
    console.log('api', api.query);
    const unsub = await api.query[palletRpc][callable](...transformed, queryResHandler);
    setUnsub(() => unsub);
  }
  
  const queryResHandler = result =>
  result.isNone ? setStatusQuery('None') : setStatusQuery(result.toString().substring(1, result.toString().length -1));

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

  const pfizerAccounts = ['ALICE','ALICE_STASH','BOB','BOB_STASH'];
  const transportbedrijfAccounts = ['CHARLIE', 'DAVE'];
  const apotheekAccounts = ['EVE', 'FERDIE'];

  var actions = new Array();
  SetActions();
  function SetActions() {
    if(CheckPfizer(currentAccount)){
      actions.length = 0;
      actions = ['Productie vaccin', 'Goedkeuring vaccin', 'Klaar voor levering'];
    }
    else if(CheckTransportbedrijf(currentAccount)) {
      actions.length = 0;
      actions = ['Ophalen vaccin', 'Opgeslagen in opslagruimte', 'Opleveren vaccin aan apotheek'];
    }
    else if(CheckApotheek(currentAccount)) {
      actions.length = 0;
      actions = ['Ontvangst vaccin', 'Klaarmaken vaccin', 'Vaccinatie bij mensen'];
    }
  }

  const actionsHtml = [];
  var selectedBlock = null;

  function CheckPfizer(account) {
    var username = GetUsername(account.account);
    return pfizerAccounts.includes(username);;
  }
  function CheckTransportbedrijf(account) {
    var username = GetUsername(account.account);
    return transportbedrijfAccounts.includes(username);
  }
  function CheckApotheek(account) {
    var username = GetUsername(account.account);
    return apotheekAccounts.includes(username);
  }

  function GetUsername(account) {
    var username = keyringOptions.filter(o => o.value === account)[0];
    if(username !== undefined) {
      return username.text;
    }
  }

  function selectBlock(block) {
    selectedBlock = block;
    console.log('Block selected: ', selectedBlock);
    ReactDOM.render('Geselecteerde vaccin: ' + selectedBlock, document.getElementById('selectedBlock'));
  }  

  // function voerActieUit() {
  //   console.log('Voer actie uit...');
  // }

  // for(const [index, value] of actions.entries()) {
  //   actionsHtml.push(<option key={index} value={value}>{value}</option>);
  // }

  const cardBlockRight = {
    width: '45%',
    float: 'right'
  };

  const cardBlockLeft = {
    width: '45%',
    float: 'left'
  };

  const cardWidthStyleRight = {
    width: '100%'
  };

  const divWidthStyleRight = {
    width: '33%'
  };

  const divWidthStyleHeader = {
    width: '100%'
  };

  const cardWidthStyleHeader = {
    width: '100%'
  };

  const inputParams = [
    { type: 'AccountId', value: currentAccount.account },
    { type: 'CommodityInfo', value: new Date().toString() }
  ];

  const paramFields = [
    { name: 'owner_account', optional: false, type:'AccountId'},
    { name: 'commodity_info', optional: false, type: 'CommodityInfo'}
  ];

  var buttonProps = { 
    accountPair: {...currentAccount.accountPair},
    setStatus: setStatus,
    attrs:{ interxType:interxType, palletRpc:'commodities', callable:'mint', inputParams, paramFields }
  };

  return (
    <Grid stackable columns='equal'>
        <Grid.Column style={divWidthStyleHeader}>
          <Card style={cardWidthStyleHeader}>
            <Card.Content>
              <Card.Header>Vaccin blockchain</Card.Header>
              <Card.Meta>
                <span>Druk op de knop op een nieuw vaccin te genereren.</span>
              </Card.Meta>
              <Card.Description>
                
                <TxButton
                  label = 'Generate vaccin'
                  type = 'SUDO-TX'
                  color = 'blue'
                  {...buttonProps}
                />
                
              </Card.Description>
            </Card.Content>
            <Card.Content id="selectedBlock">

              Geselecteerde vaccin: er is geen vaccin geselecteerd.

            </Card.Content>
            <Card.Content extra>
              <Icon name='setting' />v{nodeInfo.nodeVersion}
            </Card.Content>
          </Card>
        </Grid.Column>
      <Grid style={divWidthStyleHeader}>
        <Grid.Column style={divWidthStyle}>
          <Card style={cardWidthStyle}>
            <Card.Content>
              <div style={cardBlockLeft}>
              <Card.Header>Vaccins</Card.Header>
              <Card.Meta>
                <span>Selecteer een vaccin en voer een actie uit.</span>
              </Card.Meta>
              <Card.Description>

                <div>
                  <p>Hieronder een lijst met alle vaccins:</p>

                  <button onClick={() => GetBlocks()}>Blocks ophalen</button>
                  <br /><br />
                  {statusQuery}
                  
                </div>
              
              </Card.Description>
              </div>
              <div style={cardBlockRight}>
                {/* <br /><br /><br /><br />
                <select id="dropdownactions" name="actions">
                  {actionsHtml}
                </select>
                <button onClick={() => voerActieUit()}>Actie uitvoeren</button> */}
              </div>
            </Card.Content>
            <Card.Content extra>
              <Icon name='setting' />v{nodeInfo.nodeVersion}
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column style={divWidthStyleRight}>
        <Card style={cardWidthStyleRight}>
          <Card.Content>
            <Card.Header>Geschiedenis</Card.Header>
            <Card.Meta>
              <span>Selecteer hiernaast een vaccin om de geschiedenis te zien.</span>
            </Card.Meta>
            <Card.Description>
              Hier komt de geschiedenis van een vaccin te staan.
              
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name='setting' />v{nodeInfo.nodeVersion}
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
    </Grid>
  );
}

export default function BlockSelector (accountAddress) {
  const { api } = useSubstrate();
  return api.rpc &&
    api.rpc.system &&
    api.rpc.system.chain &&
    api.rpc.system.name &&
    api.rpc.system.version ? (
      <Main {...accountAddress} />
    ) : null;
}
