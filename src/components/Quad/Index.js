import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { InputSelect } from "./InputSelect";
import { SimpleScene } from "../SimpleScene/Index";

export const Quad = ({
  scene,
  scenes,
  currentScene,
  inputs,
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
            handleChange={handleChange}
            scene={scene}
            initialValue={scenes[scene]["Top Right"]["input"]}
            currentScene={currentScene}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Bottom Left</h4>
          <InputSelect
            label="Bottom Left"
            inputs={inputs}
            handleChange={handleChange}
            scene={scene}
            initialValue={scenes[scene]["Bottom Left"]["input"]}
            currentScene={currentScene}
          />
        </Col>
        <Col>
          <h4>Bottom Right</h4>
          <InputSelect
            label="Bottom Right"
            inputs={inputs}
            handleChange={handleChange}
            scene={scene}
            initialValue={scenes[scene]["Bottom Right"]["input"]}
            currentScene={currentScene}
          />
        </Col>
      </Row>
    </>
  );
};
