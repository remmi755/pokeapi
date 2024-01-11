import React from "react";
import "../../App.css";
import cn from "classnames";

import IconStar from "../Icons/IconStar";
import ChevronDown from "../Icons/ChevronDown";

export interface ButtonProps {
  type: string;
  text: string;
  variant: string;
  size: string;
  disabled?: Boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  disabled,
  text,
  size,
  variant,
  onClick,
}) => {
  const btnClass = cn(`button px-2`, `button-${size} button-${variant}`);

  const children = (text: string) => {
    return (
      <div className={`flex justify-between items-center `}>
        <IconStar />
        <p className="px-1">{text}</p>
        <ChevronDown />
      </div>
    );
  };

  return (
    <button
      disabled={disabled}
      type={type}
      className={btnClass}
      onClick={onClick}
    >
      {children(text)}
    </button>
  );
};

export default Button;