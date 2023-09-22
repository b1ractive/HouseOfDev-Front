import React from 'react'
import axios from 'axios';

function logOut() {
  const handleLogout = () => {
    axios.post("/api/users/logout").then(() => {
      console.log("Has cerrado sesión");
      setTimeout(() => {
        navigate("/");
        onSubmitReload();
      }, 1500);
    });
  };
  return (
    <div>
        <li>
        <button className="dropdown-item" onClick={handleLogout}>
        Desloguearse
        </button>
        </li>
    </div>
  )
}

export default logOut;

