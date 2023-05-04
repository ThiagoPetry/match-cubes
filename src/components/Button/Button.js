import React from "react";

const Button = ({
  id,
  icon,
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
      {label && label}
      {icon && icon}
    </button>
  );
}

export default Button;
