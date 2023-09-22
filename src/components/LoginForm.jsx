import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css"

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("/login", {
        email: email,
        password: password,
      })
      .then(() => {
        console.log("Has iniciado sesión");
        navigate("/");
      })

      .catch((err) => {
        console.log(err);
      });
  };

  

  return (
    
    <div className="retroForm" >
      <form onSubmit={handleLogin}>
        <h2 className="house">HOUSE OF DEV</h2>
        <h2 className="achicarLetra">Tu nueva vivienda esta aqui.</h2>
        <div className="mb-3" >
          
          <label  htmlFor="exampleInputEmail1" className="form-label">
           
          </label>
          <input
          placeholder="EMAIL"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChangeEmail}
            required
          />
        </div>
        <br />
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            
          </label>
          <input
          placeholder="PASSWORD"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={onChangePassword}
            required
          />
        </div>
        <br />
        <Link to={"/"}>
          <button type="submit" className="form-control">
            Iniciar sesión
          </button>
        </Link>
      </form>
      <br></br>
      <p>No tienes una cuenta?</p>
      <Link to={"/register"}>
        <button type="submit" className="form-control">
          Registrarse
        </button>
      </Link>
      
      
     
    </div>
  );
};

export default LoginForm;
