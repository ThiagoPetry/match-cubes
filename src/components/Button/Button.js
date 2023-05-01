import React from "react";

const Button = ({
  id,
  label,
  onClick,
  disabled,
  className,
}) => {
  return (
    <button
      id={id}
      name={id}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {label}
    </button>
  );
}

export default Button;
