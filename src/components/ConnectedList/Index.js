import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

export const ConnectionList = ({ OBS1Connected, OBS2Connected, OBS3Connected, vMixConnected }) => {

  return (
    <>
      <ListGroup horizontal>
        <ListGroup.Item variant={OBS1Connected ? 'success' : 'danger'}>OBS1 {OBS1Connected ? 'connected!' : 'not connected'}</ListGroup.Item>
        <ListGroup.Item variant={OBS2Connected ? 'success' : 'danger'}>OBS2 {OBS2Connected ? 'connected!' : 'not connected'}</ListGroup.Item>
        <ListGroup.Item variant={OBS3Connected ? 'success' : 'danger'}>OBS3 {OBS3Connected ? 'connected!' : 'not connected'}</ListGroup.Item>
        <ListGroup.Item variant={vMixConnected ? 'success' : 'danger'}>vMix {vMixConnected ? 'connected!' : 'not connected'}</ListGroup.Item>
      </ListGroup>
    </>
  )
}