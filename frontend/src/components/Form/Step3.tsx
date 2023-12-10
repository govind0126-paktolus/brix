import React, { useState } from "react";
import RadioBox from "../RadioBox";
import "./Step3.css";
import { toast } from "react-toastify";
import Button from "../Button";

const Step3 = ({ formData, setFormData, onNext, onPrev }: { formData: any, setFormData: any, onNext: () => void, onPrev: () => void }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [toastShown, setToastShown] = useState<boolean>(false);


  const handleOptionClick = (optionText: string) => {
    setSelectedOption(optionText);
    setFormData((prevFormData: any) => ({ ...prevFormData, budget: optionText }));
  };

  const handleNext = () => {
    if (selectedOption) {
      onNext();
    } else {
      showToast("Please select a budget option");
    }
  };
 const showToast = (message: string) => {
    if (!toastShown) {
      toast.error(message);
      setToastShown(true);
      setTimeout(() => {
        setToastShown(false)
      }, 5000);
    }
  };
  return (
    <div>
      <div className="budget_div">
        <h3>What's your project budget? </h3>
        <div>
          <p>Please select the project budget range you have in mind.</p>
          <div className="radiobox_div">
            <RadioBox
              onClick={() => handleOptionClick("$5.000-$10.000")}
              optionText="$5.000-$10.000"
              isSelected={selectedOption === "$5.000-$10.000"}
            />
            <RadioBox
              onClick={() => handleOptionClick("$10.000-$20.000")}
              optionText="$10.000-$20.000"
              isSelected={selectedOption === "$10.000-$20.000"}
            />
            <RadioBox
              onClick={() => handleOptionClick("$20.000-$50.000")}
              optionText="$20.000-$50.000"
              isSelected={selectedOption === "$20.000-$50.000"}
            />
            <RadioBox
              onClick={() => handleOptionClick("$50.000 +")}
              optionText="$50.000 +"
              isSelected={selectedOption === "$50.000 +"}
            />
          </div>
        </div>
      </div>
      <div className="buttons">
        <Button onClick={onPrev} label="Previous Step" />
        <Button onClick={handleNext} label="Next Step" />
      </div>
    </div>
  );
};

export default Step3;
