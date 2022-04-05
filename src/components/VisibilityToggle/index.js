import React from "react";

import Button from "react-bootstrap/Button";

export const VisibilityToggle = ({
  scene,
  type,
  visible,
  handleVisibilityToggle,
}) => {
  return (
    <>
      <Button
        variant={visible ? "secondary" : "warning"}
        onClick={() => handleVisibilityToggle(scene, type)}
      >
        {visible ? `${type} Visible` : `${type} Hidden`}
      </Button>
    </>
  );
};
