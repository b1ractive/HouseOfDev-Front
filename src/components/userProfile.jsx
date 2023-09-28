import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
} from "@mui/material";

const UserProfile = ({ user }) => {
  return (
    <>
      {user ? (
        <div>
          <div>
            <div>
              <h1>{user.name}</h1>
              <div>
                <p>Email: {user.email}</p>
              </div>
              <div>
                <p>Teléfono: {user.telephone}</p>
              </div>
              <div>
                <p>Contraseña: {user.password}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Cargando datos de usuario...</p>
      )}
    </>
  );
};

export default UserProfile;
