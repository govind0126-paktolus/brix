import React from "react";
import "./style.css";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
}) => {
  const stepArray = Array.from({ length: totalSteps }, (_, index) => index + 1);

  return (
    <div className="progress-bar">
      {stepArray.map((step, index) => (
        <React.Fragment key={step}>
          {index > 0 && (
            <>
              <div
                className={`step-connector ${
                  step <= currentStep ? "active" : ""
                }`}
              ></div>
              <div
                className={`step-indicator ${
                  step <= currentStep ? "active" : ""
                }`}
              >
                {step}
              </div>
            </>
          )}
          {index === 0 && (
            <div
              className={`step-indicator ${
                step <= currentStep ? "active" : ""
              }`}
            >
              {step}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressBar;
