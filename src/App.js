import React, { useState, createRef } from 'react';
import { Container, Dimmer, Loader, Grid, Sticky, Message, Button } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import { SubstrateContextProvider, useSubstrate } from './substrate-lib';
import { DeveloperConsole } from './substrate-lib/components';

import AccountSelector from './AccountSelector';
import Balances from './Balances';
import BlockNumber from './BlockNumber';
import Events from './Events';
import Interactor from './Interactor';
import Metadata from './Metadata';
import NodeInfo from './NodeInfo';
import BlockSelector from './BlockSelector';
import TemplateModule from './TemplateModule';
import Transfer from './Transfer';
import Upgrade from './Upgrade';
import GenerateVaccin from './GenerateVaccin';

function Main () {
  const [accountAddress, setAccountAddress] = useState(null);
  const { apiState, keyring, keyringState, apiError } = useSubstrate();
  const [ pageState, setPageState ] = useState('companyPage');
  const accountPair =
    accountAddress &&
    keyringState === 'READY' &&
    keyring.getPair(accountAddress);

  const loader = text =>
    <Dimmer active>
      <Loader size='small'>{text}</Loader>
    </Dimmer>;

  const message = err =>
    <Grid centered columns={2} padded>
      <Grid.Column>
        <Message negative compact floating
          header='Error Connecting to Substrate'
          content={`${err}`}
        />
      </Grid.Column>
    </Grid>;

  if (apiState === 'ERROR') return message(apiError);
  else if (apiState !== 'READY') return loader('Connecting to Substrate');

  if (keyringState !== 'READY') {
    return loader('Loading accounts (please review any extension\'s authorization)');
  }

  var isBedrijvenPagina = true;

  const contextRef = createRef();

  function goToConsumentenPagina() {
    isBedrijvenPagina = false;
    setPageState('consumerPage')
  }

  function goToBedrijvenPagina() {
    isBedrijvenPagina = true;
    setPageState('companyPage')
  }

  const newPageStyle = {
    margin: '0 auto'
  };

  function AskWitchPage() {
    if(pageState == 'companyPage') {
      return <BlockSelector account={accountAddress} accountPair={accountPair} />;
    } else {
      return <GenerateVaccin account={accountAddress} accountPair={accountPair} />;
    }
  }
  function extraContent() {
    if(pageState == 'companyPage'){
        return <Grid stackable columns='equal'>
          <Grid.Row stretched>
            {/* <NodeInfo />
            <Metadata /> */}
            <BlockNumber />
            <BlockNumber finalized />
          </Grid.Row>
          {/* <Grid.Row stretched>
            <Balances />
          </Grid.Row> */}
          {/* <Grid.Row>
            <Transfer accountPair={accountPair} />
            <Upgrade accountPair={accountPair} />
          </Grid.Row> */}
          <Grid.Row>
            <Interactor accountPair={accountPair} />
            <Events />
          </Grid.Row>
          <Grid.Row>
            <TemplateModule accountPair={accountPair} />
          </Grid.Row>
        </Grid>;
    }
  }

  return (
    <div ref={contextRef}>
      <Sticky context={contextRef}>
        <AccountSelector setAccountAddress={setAccountAddress} />
        <Container>
          <div style={newPageStyle}>
            <Button onClick={() => goToBedrijvenPagina()} href='#'>BedrijvenPagina</Button>
            <Button onClick={() => goToConsumentenPagina()} href='#'>ConsumentenPagina</Button>
          </div>
        </Container>
      </Sticky>
      <Container>
        <br /><br />

        <Grid stackable columns='equal'>
          <Grid.Row stretched id='content'>
            
            {AskWitchPage()}
            
          </Grid.Row>
        </Grid>

        <br /><br /><br />
        {extraContent()}
        
      </Container>
      <DeveloperConsole />
    </div>
  );
}

export default function App () {
  return (
    <SubstrateContextProvider>
      <Main />
    </SubstrateContextProvider>
  );
}
