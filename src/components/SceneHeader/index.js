import React from "react";

import { SimpleScene } from "../SimpleScene";
import { PresetsList } from "../PresetsList";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const SceneHeader = ({
  scenePresets,
  scene,
  currentScene,
  handleTransition,
  handlePreset,
}) => {
  const hasPresets = scenePresets?.[scene];

  return (
    <>
      {hasPresets ? (
        <Row>
          <Col>
            <Row>
              <SimpleScene
                scene={scene}
                currentScene={currentScene}
                handleTransition={handleTransition}
              />
            </Row>
          </Col>
          <Col>
            <Row>
              <PresetsList
                presets={scenePresets[scene]}
                handlePreset={handlePreset}
                scene={scene}
                currentScene={currentScene}
              />
            </Row>
          </Col>
        </Row>
      ) : (
        <Row>
          <SimpleScene
            scene={scene}
            currentScene={currentScene}
            handleTransition={handleTransition}
          />
        </Row>
      )}
    </>
  );
};
