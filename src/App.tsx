import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SignupForm from "./components/SignupForm";
import { Toaster } from "react-hot-toast";

import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import AuthContext from "./context/authContext";

function App() {
  return (
    <div className="App">
      <Toaster />
      <AuthContext>
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<div>Home</div>} />
        </Routes>
      </AuthContext>
    </div>
  );
}

export default App;
