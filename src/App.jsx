
import React from "react";
import {  BrowserRouter } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Home />
      <LoginForm />
     
      </BrowserRouter>
    </div>
 
  );
}

export default App;
