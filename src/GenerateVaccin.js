import React, { useEffect, useState } from 'react';
import { Card, Icon, Grid } from 'semantic-ui-react';

import { useSubstrate } from './substrate-lib';

function Main (props) {
  const { api } = useSubstrate();
  const [nodeInfo, setNodeInfo] = useState({});

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

  function genereerVaccin() {
    console.log('Genereer een vaccin...');
  }

  return (
    <div style={divWidthStyle}>
    <Grid.Column style={divWidthStyle}>
      <Card style={cardWidthStyleLeft}>
        <Card.Content>
          <Card.Header>Controleer vaccin</Card.Header>
          <Card.Meta>
            <span>Selecteer een vaccin om de geschiedenis in te zien.</span>
          </Card.Meta>
          <Card.Description>
            
            Hier komt een lijst met vaccins die te selecteren zijn.

          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name='setting' />v{nodeInfo.nodeVersion}
        </Card.Content>
      </Card>
      </Grid.Column>
      <Grid.Column>
      <Card style={cardWidthStyleRight}>
        <Card.Content>
          <Card.Header>Controleer vaccin</Card.Header>
          <Card.Meta>
            <span>Selecteer een vaccin om te zien of blockchain geldig is.</span>
          </Card.Meta>
          <Card.Description>
            
            Hier logica inbouwen om dat te laten zien.

          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name='setting' />v{nodeInfo.nodeVersion}
        </Card.Content>
      </Card>
    </Grid.Column>
    <br /><br />
    <Grid.Column style={divWidthStyle}>
        <Card style={divWidthStylePlusTop}>
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
