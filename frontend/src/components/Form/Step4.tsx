import React from "react";
import { useDispatch, useSelector } from "react-redux";
import success from "../../assets/submit.png";
import "./Step4.css";
import Button from "../Button";
import { submitForm } from "../../redux/action";
import { toast } from "react-toastify";

interface Step4Props {
  onPrev: () => void;
}

const Step4: React.FC<Step4Props> = ({ onPrev }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state: any) => state.submittedFormData);

  const handleSubmit = async () => {
    try {
      // const bearerToken: string =
      //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImJvYkBwYWt0b2x1cy5jb20iLCJuYW1laWQiOiJhYTgzOTQyNS00OWU4LTQwNzItOGJlNC0yMDQ5MDU4YzYwOGQiLCJnaXZlbl9uYW1lIjoiQm9iIiwiZmFtaWx5X25hbWUiOiJBbmFzb3JpIiwidXNlcl92aWV3X2FjY2Vzc190eXBlIjoiRGVhbGVyIiwicm9sZSI6WyJEZWFsZXIiLCJWaWV3IEludm9pY2UiLCJTYXZlIFF1b3RlcyIsIkVkaXQgTWFya3VwIiwiVmlldyBSZW1pdHRhbmNlIiwiTWFuYWdlIEFDSCBJbmZvcm1hdGlvbiIsIkNhbmNlbCBDb250cmFjdCIsIlZvaWQgQ29udHJhY3RzIiwiVmlldyBSZXRhaWwgUHJpY2UgTGltaXRzIiwiRWRpdCBSZXRhaWwgUHJpY2UgTGltaXRzIiwiUGF5IFJlbWl0dGFuY2UiLCJFbnRlciBDb250cmFjdCIsIlByb2Nlc3MgUXVvdGVzIiwiU2FsZXMgQXNzb2NpYXRlcyIsIlZpZXcgTWFya3VwIl0sInNpZ25faW4iOiJtZmEiLCJuYmYiOjE2OTgwNTQ1MjYsImV4cCI6MTY5ODE0MDkyNiwiaWF0IjoxNjk4MDU0NTI2LCJpc3MiOiJodHRwczovL3pvb20tc3RhZ2UuYWxwaGF3YXJyYW50eS5jb20iLCJhdWQiOiJodHRwczovL3pvb20tc3RhZ2UuYWxwaGF3YXJyYW50eS5jb20ifQ._6DP-RHaxKa0PYP4DSIZLkJYYggfcHNGm68VMggWV9E";

      const apiUrl: string = "http://localhost:3001/form-data";

      const headers = {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${bearerToken}`,
      };

      const apiFormData = {
        full_name: formData.name,
        email: formData.email,
        phone: formData.phoneNumber,
        company: formData.companyName,
        intrested_services: formData.service,
        budget: formData.budget,
        requested_at: new Date().toISOString(),
      };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(apiFormData),
      });

      if (response.ok) {
        toast.success("API call successful");
      } else {
        console.log(response);
        toast.error("API call failed");
      }
    } catch (error) {
      toast.error("Error making API call");
    }
    dispatch(submitForm(formData));
  };

  return (
    <div>
      <div className="step4_div">
        <div className="image-container">
          <img src={success} alt="Submit logo" className="step-image" />
        </div>
        <div className="content-container">
          <h3>Submit your quote request</h3>
          <p>
            Please review all the information you previously typed in the past
            steps, and if all is okay, submit your message to receive a project
            quote in 24 - 48 hours.
          </p>
          <Button onClick={handleSubmit} label="Submit" />
        </div>
      </div>
      <div className="buttons-2">
        <Button onClick={onPrev} label="Previous Step" />
      </div>
    </div>
  );
};

export default Step4;
