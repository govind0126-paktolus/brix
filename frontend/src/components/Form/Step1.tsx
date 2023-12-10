import React, { useState } from "react";
import "./Step1.css";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineEmail, MdContactPage } from "react-icons/md";
import { FaIndustry } from "react-icons/fa";
import { toast } from "react-toastify";
import Button from "../Button";

const Step1 = ({ formData, setFormData, onNext }: { formData: any, setFormData: any, onNext: () => void }) => {


  const [toastShown, setToastShown] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData: any) => ({ ...prevFormData, [name]: value }));
  };

  const handleNext = () => {
    if (!formData.name) {
      showToast("Please enter your name");
    } else if (!formData.email) {
      showToast("Please enter your email");
    } else if (!isValidEmail(formData.email)) {
      showToast("Please enter a valid email address");
    } else if (!formData.phoneNumber) {
      showToast("Please enter your phone number");
    } else if (!isValidPhoneNumber(formData.phoneNumber)) {
      showToast("Please enter a valid 10-digit phone number");
    } else if (!formData.companyName) {
      showToast("Please enter your company name");
    } else {
      onNext();
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

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber: string) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  return (
    <div>
      <div className="step1_div">
        <h3>Contact Details</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        <div className="step1_inputs">
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Carter"
              value={formData.name}
              onChange={handleInputChange}
            />
            {!formData.name && <LuUser2 className="user-icon" />}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
            />

            {!formData.email && <MdOutlineEmail className="email-icon" />}
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <br />
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="(123)-456-7890"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            {!formData.phoneNumber && (
              <MdContactPage className="contact-icon" />
            )}
          </div>
          <div>
            <label htmlFor="companyName">Company Name</label>
            <br />
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleInputChange}
            />

            {!formData.companyName && <FaIndustry className="company-icon" />}
          </div>
        </div>
      </div>
      <div className="button_div">
        <Button onClick={handleNext} label="Next Step" />
      </div>
    </div>
  );
};

export default Step1;
