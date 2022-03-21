import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { InputSelect } from "../InputSelect";
import { SceneHeader } from "../SceneHeader";

export const GameplayFocus = ({
  scene,
  scenes,
  currentScene,
  inputs,
  playerNames,
  handleChange,
  handleTransition,
  handlePreset,
  scenePresets,
}) => {
  return (
    <>
      <SceneHeader
        scenePresets={scenePresets}
        scene={scene}
        currentScene={currentScene}
        handleTransition={handleTransition}
        handlePreset={handlePreset}
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
      <Row>
        <Col>
          <h4>3</h4>
          <InputSelect
            label="3"
            inputs={inputs}
            playerNames={playerNames}
            handleChange={handleChange}
            scene={scene}
            initialValue={scenes[scene]["3"]["input"]}
            currentScene={currentScene}
          />
        </Col>
        <Col>
          <h4>5</h4>
          <InputSelect
            label="5"
            inputs={inputs}
            playerNames={playerNames}
            handleChange={handleChange}
            scene={scene}
            initialValue={scenes[scene]["5"]["input"]}
            currentScene={currentScene}
          />
        </Col>
        <Col>
          <h4>7</h4>
          <InputSelect
            label="7"
            inputs={inputs}
            playerNames={playerNames}
            handleChange={handleChange}
            scene={scene}
            initialValue={scenes[scene]["7"]["input"]}
            currentScene={currentScene}
          />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <h4>4</h4>
          <InputSelect
            label="4"
            inputs={inputs}
            playerNames={playerNames}
            handleChange={handleChange}
            scene={scene}
            initialValue={scenes[scene]["4"]["input"]}
            currentScene={currentScene}
          />
        </Col>
        <Col>
          <h4>6</h4>
          <InputSelect
            label="6"
            inputs={inputs}
            playerNames={playerNames}
            handleChange={handleChange}
            scene={scene}
            initialValue={scenes[scene]["6"]["input"]}
            currentScene={currentScene}
          />
        </Col>
        <Col>
          <h4>8</h4>
          <InputSelect
            label="8"
            inputs={inputs}
            playerNames={playerNames}
            handleChange={handleChange}
            scene={scene}
            initialValue={scenes[scene]["8"]["input"]}
            currentScene={currentScene}
          />
        </Col>
        <Col></Col>
      </Row>
    </>
  );
};
