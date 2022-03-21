import React from "react";

import Form from "react-bootstrap/Form";

export const InputSelect = ({
  label,
  inputs,
  playerNames,
  handleChange,
  scene,
  initialValue,
  currentScene,
}) => {
  return (
    <Form.Select
      aria-label={label}
      onChange={(e) => handleChange(scene, label, e.target.value)}
      value={initialValue}
      disabled={currentScene === scene ? true : false}
    >
      {inputs.map((input, idx) => {
        return (
          <option value={input} key={input}>
            {playerNames[idx]}
          </option>
        );
      })}
    </Form.Select>
  );
};
