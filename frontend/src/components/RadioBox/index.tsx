import React from "react";
import "./style.css";

interface RadioSelectBoxProps {
  onClick: () => void;
  optionText: string;
  isSelected: boolean;
}

const RadioBox: React.FC<RadioSelectBoxProps> = ({
  onClick,
  optionText,
  isSelected,
}) => {
  return (
    <div
    className={`radio-wrapper ${isSelected ? "selected" : ""}`}
    onClick={onClick}
  >
    <div className={`custom-radio ${isSelected ? "selected" : ""}`}>
      {isSelected && <div className="check-mark">&#10003;</div>}
    </div>
    <label htmlFor={optionText}>{optionText}</label>
  </div>
  );
};

export default RadioBox;
