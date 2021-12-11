import React from "react";

const FormInput = ({ label, name, type, handleChange }) => {
  return (
    <div className="auth__form-container_fields-content_input">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={label}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default FormInput;
