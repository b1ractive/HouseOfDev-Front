import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import LogOut from "./components/LogOut";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUser } from "./redux/userReducer";
import UserProfileView from "./components/userProfileView";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        const userData = response.data;

        dispatch(setUser(userData)); // hacer esto en el login
      })
      .catch((error) => {
        console.error("ERROR EN EL AXIOS", error);
      });
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<LogOut />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfileView />} />
      </Routes>
    </>
  );
}

export default App;
