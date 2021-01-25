import React, { useState, createRef } from 'react';
import { Container, Dimmer, Loader, Grid, Sticky, Message } from 'semantic-ui-react';
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
    console.log('Switch pagina consument');
    isBedrijvenPagina = false;
    // ReactDOM.render(isBedrijvenPagina, document.getElementById('content'));
    // ReactDOM.render(AskWitchPage(), document.getElementById('content'));
    ReactDOM.render(AskWitchPage(), document.getElementById('content'));
  }

  function goToBedrijvenPagina() {
    console.log('Switch pagina: bedrijven');
    isBedrijvenPagina = true;
    // ReactDOM.render(isBedrijvenPagina, document.getElementById('content'));
    // ReactDOM.render(AskWitchPage(), document.getElementById('content'));
    ReactDOM.render(AskWitchPage(), document.getElementById('content'));
  }

  const newPageStyle = {
    margin: '0 auto'
  };

  function AskWitchPage() {
    console.log(isBedrijvenPagina);
    if(isBedrijvenPagina) {
      return <BlockSelector account={accountAddress}/>;
    } else {
      return <GenerateVaccin />;
    }
  }

  return (
    <div ref={contextRef}>
      <Sticky context={contextRef}>
        <AccountSelector setAccountAddress={setAccountAddress} />
        <Container>
          <div style={newPageStyle}>
            <button onClick={() => goToConsumentenPagina()} href='#'>ConsumentenPagina</button>
            <button onClick={() => goToBedrijvenPagina()} href='#'>BedrijvenPagina</button>
          </div>
        </Container>
      </Sticky>
      <Container>
        <br /><br /><br />

        <Grid stackable columns='equal'>
          <Grid.Row stretched id='content'>
            <BlockSelector account={accountAddress}/>
            <br /><br /><br />
            Dit moet nog Of / Of worden
            <br /><br /><br />
            <br /><br /><br />
            <GenerateVaccin />
            {/* {AskWitchPage()} */}
            {/* <BlockSelector account={accountAddress}/>
            <GenerateVaccin /> */}
          </Grid.Row>
        </Grid>

        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br />
        {/* <p>Dit laten we nog even staan. Wellicht nog hergebruiken, anders weggooien voor Assesment.</p>
        <Grid stackable columns='equal'>
          <Grid.Row stretched>
            <NodeInfo />
            <Metadata />
            <BlockNumber />
            <BlockNumber finalized />
          </Grid.Row>
          <Grid.Row stretched>
            <Balances />
          </Grid.Row>
          <Grid.Row>
            <Transfer accountPair={accountPair} />
            <Upgrade accountPair={accountPair} />
          </Grid.Row>
          <Grid.Row>
            <Interactor accountPair={accountPair} />
            <Events />
          </Grid.Row>
          <Grid.Row>
            <TemplateModule accountPair={accountPair} />
          </Grid.Row>
        </Grid> */}
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
