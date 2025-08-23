import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import BaseLayout from "./layouts/baseLayout/BaseLayout";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello Dev!</h1>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
