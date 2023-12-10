import React from "react";
import Button from "../../Button";
import "./style.css";
import logo from "../../../assets/Group 187.png";

const Footer = () => {
  return (
    <div className="footer_div">
      <div className="footer_img_div">
        <img src={logo} alt="Footer Logo" />
        <p>Copyright © BRIX Templates | All Rights Reserved</p>
      </div>
      <div className="footer_input_div">
        <p>Subscribe to receive free Webflow cloneables every month.</p>
        <div className="input-with-button">
          <input
            type="text"
            placeholder="Enter Your Email"
          />
          <Button
            onClick={() => console.log("Footer Button clicked!")}
            label="Subscribe"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
