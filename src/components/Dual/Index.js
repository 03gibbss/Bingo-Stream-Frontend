import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { InputSelect } from '../Quad/InputSelect';
import { SimpleScene } from '../SimpleScene/Index';

export const Dual = ({ scene, scenes, currentScene, inputs, handleChange, handleTransition }) => {

  return (
    <>
      <SimpleScene scene={scene} currentScene={currentScene} handleTransition={handleTransition} />
      <Row>
        <Col>
          <h4>Left</h4>
          <InputSelect label="Left" inputs={inputs} handleChange={handleChange} scene={scene} initialValue={scenes[scene]['Left']} currentScene={currentScene} />
        </Col>
        <Col>
          <h4>Right</h4>
          <InputSelect label="Right" inputs={inputs} handleChange={handleChange} scene={scene} initialValue={scenes[scene]['Right']} currentScene={currentScene} />
        </Col>
      </Row>
    </>
  )
}