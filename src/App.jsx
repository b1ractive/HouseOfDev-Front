import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import LogOut from "./components/LogOut";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import GridProperty from "./components/Grid/Grid";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<GridProperty />} />
        <Route path="/home" element={<LogOut />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
