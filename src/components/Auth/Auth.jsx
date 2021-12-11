import React, { useState } from "react";

import Cookies from "universal-cookie";
import axios from "axios";

import "./style.css";

import signinImage from "../../assets/signup.jpg";
import FormInput from "./FormInput";

const cookies = new Cookies();

const initialFormData = {
  fullName: "",
  userName: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  avatarURL: "",
};

const Auth = () => {
  const [form, setForm] = useState(initialFormData);
  const [isSignup, setIsSignup] = useState(true);

  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password, phoneNumber, avatarURL } = form;
    // const URL = "http://localhost:5000/auth";
    const URL = 'https://hakimchat-16.herokuapp.com/'

    const {
      data: { token, userId, hashedPassword, fullName },
    } = await axios.post(`${URL}/${isSignup ? "signup" : "login"}`, {
      username,
      password,
      fullName: form.fullName,
      phoneNumber,
      avatarURL,
    });

    cookies.set("token", token);
    cookies.set("username", username);
    cookies.set("fullName", fullName);
    cookies.set("userId", userId);

    if (isSignup) {
      cookies.set("phoneNumber", phoneNumber);
      cookies.set("avatarURL", avatarURL);
      cookies.set("hashedPassword", hashedPassword);
    }

    window.location.reload();
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? "Sign Up" : "Sign In"}</p>
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <FormInput
                label="Full Name"
                name="fullName"
                type="text"
                handleChange={handleChange}
              />
            )}
            <FormInput
              label="Username"
              name="username"
              type="text"
              handleChange={handleChange}
            />
            {isSignup && (
              <FormInput
                label="Phone Number"
                name="phoneNumber"
                type="text"
                handleChange={handleChange}
              />
            )}
            {isSignup && (
              <FormInput
                label="Avatar URL"
                name="avatarURL"
                type="text"
                handleChange={handleChange}
              />
            )}
            <FormInput
              label="Password"
              name="password"
              type="password"
              handleChange={handleChange}
            />
            {isSignup && (
              <FormInput
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                handleChange={handleChange}
              />
            )}
            <div className="auth__form-container_fields-content_button">
              <button>{isSignup ? "Sign Up" : "Sign In"}</button>
            </div>
          </form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignup ? "Already have an account?" : "Don't have an account"}
              <span onClick={switchMode}>
                {isSignup ? "Sign In" : "Sign Up"}
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* <div className="auth__form-container_image">
        <img src={signinImage} alt="sign in" />
      </div> */}
    </div>
  );
};

export default Auth;
