import React from 'react';

import Button from 'react-bootstrap/Button';

export const SimpleScene = ({ scene, currentScene, handleTransition }) => {

  return (
    <>
      <h3>{scene}</h3>
      <Button variant={currentScene === scene ? 'success' : 'primary'} onClick={() => handleTransition(scene)}>Switch</Button>
    </>
  )
}