import React from "react";

import Button from "react-bootstrap/Button";

export const SimpleScene = ({ scene, currentScene, handleTransition }) => {
  return (
    <>
      <Button
        variant={currentScene === scene ? "success" : "primary"}
        onClick={() => handleTransition(scene)}
      >
        {scene}
      </Button>
    </>
  );
};
