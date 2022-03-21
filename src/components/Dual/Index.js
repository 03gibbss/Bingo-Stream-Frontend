import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { InputSelect } from "../Quad/InputSelect";
import { SimpleScene } from "../SimpleScene/Index";

export const Dual = ({
  scene,
  scenes,
  currentScene,
  inputs,
  playerNames,
  handleChange,
  handleTransition,
}) => {
  return (
    <>
      <SimpleScene
        scene={scene}
        currentScene={currentScene}
        handleTransition={handleTransition}
      />
      <Row>
        <Col>
          <h4>Top Left</h4>
          <InputSelect
            label="Top Left"
            inputs={inputs}
            playerNames={playerNames}
            handleChange={handleChange}
            scene={scene}
            initialValue={scenes[scene]["Top Left"]["input"]}
            currentScene={currentScene}
          />
        </Col>
        <Col>
          <h4>Top Right</h4>
          <InputSelect
            label="Top Right"
            inputs={inputs}
            playerNames={playerNames}
            handleChange={handleChange}
            scene={scene}
            initialValue={scenes[scene]["Top Right"]["input"]}
            currentScene={currentScene}
          />
        </Col>
      </Row>
    </>
  );
};
