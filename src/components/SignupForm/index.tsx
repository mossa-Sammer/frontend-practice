import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../api/config";

const SignupForm = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const { email, password } = formValues;
    await axios.post(`${baseUrl}/signup`, {
      email,
      password,
    });
    toast.success("Sign up success");
    navigate("/login");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          onChange={handleChange}
          placeholder="name"
          value={formValues.name}
        />
        <input
          name="email"
          onChange={handleChange}
          placeholder="email"
          type="email"
          value={formValues.email}
        />
        <input
          name="password"
          onChange={handleChange}
          placeholder="password"
          value={formValues.password}
        />
        <input
          name="confirmPassword"
          onChange={handleChange}
          placeholder="confirm password"
          value={formValues.confirmPassword}
        />
        <button type="submit">Submit </button>
      </form>
    </div>
  );
};

export default SignupForm;
