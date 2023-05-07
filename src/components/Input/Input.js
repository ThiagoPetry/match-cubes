import React from "react";

const Input = ({
  id,
  type,
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
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      onInput={onInput}
      maxLength={maxLength}
    />
  );
}

export default Input;
