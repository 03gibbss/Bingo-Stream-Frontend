import React from "react";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export const PresetsList = ({ presets, handlePreset, scene, currentScene }) => {
  if (!presets) {
    return <></>;
  }

  return (
    <>
      <DropdownButton
        onSelect={(e) => handlePreset(scene, e)}
        id={`${scene}-preset-dropdown`}
        title="Select preset"
        disabled={currentScene === scene ? true : false}
        variant="secondary"
      >
        {presets.map((preset) => (
          <Dropdown.Item key={preset.name} eventKey={preset.name}>
            {preset.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </>
  );
};
