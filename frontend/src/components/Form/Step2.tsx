import React, { useState } from "react";
import SelectBox from "../SelectBox";
import "./Step2.css";
import dev from "../../assets/development.png";
import web from "../../assets/web design.png";
import mark from "../../assets/marketing.png";
import other from "../../assets/other.png";
import { toast } from "react-toastify";
import Button from "../Button";

const Step2 = ({ formData, setFormData, onNext, onPrev }: { formData: any, setFormData: any, onNext: () => void, onPrev: () => void }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [toastShown, setToastShown] = useState<boolean>(false);

  const handleOptionClick = (optionText: string) => {
    setSelectedOption(optionText);
    setFormData((prevFormData: any) => ({ ...prevFormData, service: optionText }));
  };

  const handleNext = () => {
    if (selectedOption) {
      onNext();
    } else {
      showToast("Please select which service do you want ?");
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
      <div className="step2_div">
        <h3>Our Services</h3>
        <div>
          <p>Please select which service you are interested in?</p>
          <div className="selectbox_div">
            <SelectBox
              onClick={() => handleOptionClick("Development")}
              optionText="Development"
              isSelected={selectedOption === "Development"}
              imageSrc={dev}
            />
            <SelectBox
              onClick={() => handleOptionClick("Web Design")}
              optionText="Web Design"
              isSelected={selectedOption === "Web Design"}
              imageSrc={web}
            />
            <SelectBox
              onClick={() => handleOptionClick("Marketing")}
              optionText="Marketing"
              isSelected={selectedOption === "Marketing"}
              imageSrc={mark}
            />
            <SelectBox
              onClick={() => handleOptionClick("Other")}
              optionText="Other"
              isSelected={selectedOption === "Other"}
              imageSrc={other}
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

export default Step2;
