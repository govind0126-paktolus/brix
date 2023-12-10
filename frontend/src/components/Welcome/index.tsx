import React from "react";
import { useSelector } from "react-redux";

const Welcome: React.FC = () => {
  const formData = useSelector((state: any) => state.submittedFormData);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>Welcome, {formData.name}!</h1>
    </div>
  );
};

export default Welcome;
