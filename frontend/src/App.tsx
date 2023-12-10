import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import Quote from "./components/Common/Quote";
import Step1 from "./components/Form/Step1";
import Step2 from "./components/Form/Step2";
import Step3 from "./components/Form/Step3";
import Step4 from "./components/Form/Step4";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { submitForm } from "./redux/action";
import ProgressBar from "./components/Common/ProgressBar";

function App() {
  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    service: "",
    budget: "",
  });

  const handleNextStep = () => {
    dispatch(submitForm(formData));
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <Header />
      <Quote />

      <div className="progressbar_div">
        <ProgressBar currentStep={currentStep} totalSteps={4} />
      </div>

      {currentStep === 1 && (
        <Step1
          formData={formData}
          setFormData={setFormData}
          onNext={handleNextStep}
        />
      )}

      {currentStep === 2 && (
        <Step2
          formData={formData}
          setFormData={setFormData}
          onNext={handleNextStep}
          onPrev={handlePrevStep}
        />
      )}

      {currentStep === 3 && (
        <Step3
          formData={formData}
          setFormData={setFormData}
          onNext={handleNextStep}
          onPrev={handlePrevStep}
        />
      )}

      {currentStep === 4 && <Step4 onPrev={handlePrevStep} />}

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
