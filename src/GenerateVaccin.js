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
    width: '100%'
  };

  const cardWidthStyle = {
    width: '100%'
  };

  function genereerVaccin() {
    console.log('Genereer een vaccin...');
  }

  return (
    <Grid.Column style={divWidthStyle}>
      <Card style={cardWidthStyle}>
        <Card.Content>
          <Card.Header>Vaccin blockchain</Card.Header>
          <Card.Meta>
            <span>Druk op de knop op een nieuw vaccin te genereren.</span>
          </Card.Meta>
          <Card.Description>
            
            <button onClick={() => genereerVaccin()}>Genereer vaccin</button>
            
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name='setting' />v{nodeInfo.nodeVersion}
        </Card.Content>
      </Card>
    </Grid.Column>
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
