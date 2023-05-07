import React from "react";

import Icon from "../Icon/Icon.js";

const Button = ({
  id,
  icon,
  label,
  onClick,
  disabled,
  iconLeft,
  iconRight,
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
      <>
        {icon && iconLeft &&
          <Icon icon={icon} />
        }

        {label && label}

        {icon && iconRight &&
          <Icon icon={icon} />
        }
      </>
    </button>
  );
}

export default Button;
