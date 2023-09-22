import React from 'react'

function logOut() {
  const handleLogout = () => {
    axios.post("/api/users/logout").then(() => {
      toast.success("Has cerrado sesión");
      setTimeout(() => {
        navigate("/");
        onSubmitReload();
      }, 1500);
    });
  };
  return (
    <div><li>
    <button className="dropdown-item" onClick={handleLogout}>
      Desloguearse
    </button>
  </li></div>
  )
}

export default logOut;