import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import LogOut from "./components/LogOut";
import Register from "./components/Register";

import Navbar from "./components/Navbar";
import UserProfile from "./components/userProfile";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <UserProfile />
      <Routes>
        <Route path="/home" element={<LogOut />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
