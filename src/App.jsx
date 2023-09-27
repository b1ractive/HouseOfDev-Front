import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import LogOut from "./components/LogOut";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<LogOut />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;
