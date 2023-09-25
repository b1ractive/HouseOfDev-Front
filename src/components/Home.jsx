import React from "react";
import InProgress from "../assets/5695859.png";
import "./home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="body-home">
      <Link to="/login">
        <button className="loginButton">Login</button>
      </Link>
      <Link to="/logout">
        <button className="loginButton">LogOut</button>
      </Link>
      <Link to="/register">
        <button className="loginButton">Registrate</button>
      </Link>
      <div className="home">
        <div className="home-inprogress">
          <img alt="Home en progreso" src={InProgress} />
        </div>
        <div className="home-title">
          <h1>House Of Dev</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
