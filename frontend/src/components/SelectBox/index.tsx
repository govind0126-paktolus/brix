import React from "react";
import "./style.css";

interface FormOptionProps {
  onClick: () => void;
  optionText: string;
  isSelected?: boolean;
  imageSrc: string;
}

const SelectBox: React.FC<FormOptionProps> = ({
  onClick,
  optionText,
  isSelected,
  imageSrc,
}) => {
  return (
    <div
      className={`wrapper ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <div className="image">
      <img src={imageSrc} alt={optionText} className="icon" />
      </div>
 
      {optionText}
    </div>
  );
};

export default SelectBox;
