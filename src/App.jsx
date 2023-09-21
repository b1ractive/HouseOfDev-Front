import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <LoginForm />
     
      </BrowserRouter>
    </div>
  );
}

export default App;
