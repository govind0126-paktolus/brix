import React from "react";
import "./style.css";

interface ButtonProps {
  onClick?: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  const buttonClass = label === "Previous Step" ? "previous" : "button";

  return (
    <button onClick={onClick} className={buttonClass}>
      {label}
    </button>
  );
};

export default Button;
