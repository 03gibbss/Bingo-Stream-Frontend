import React from "react";

import Button from "react-bootstrap/Button";

export const MuteToggle = ({ scene, muteState, handleMuteToggle }) => {
  return (
    <>
      <Button
        variant={muteState ? "secondary" : "warning"}
        onClick={() => handleMuteToggle(scene)}
      >
        {muteState ? "Muted" : "Unmuted"}
      </Button>
    </>
  );
};
