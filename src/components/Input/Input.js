import React from "react";

const Input = ({
  id,
  value,
  onInput,
  onChange,
  maxLength,
  disabled,
}) => {
  return (
    <input
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      disabled={disabled}
      onInput={onInput}
      maxLength={maxLength}
    />
  );
}

export default Input;
