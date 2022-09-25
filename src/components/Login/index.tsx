import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../api/config";
import { UserContext } from "../../context/authContext";

const Login = () => {
  const [formValues, setFormValeus] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  console.log({ user });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormValeus({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(`${baseUrl}/login`, formValues);
    localStorage.setItem("token", data.token);
    setUser({
      ...data.user,
      token: data.token,
    });

    navigate("/home");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <input
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
