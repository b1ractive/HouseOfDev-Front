import React, { useState } from "react";
import { Paper, TextField, Button, Typography, Avatar } from "@mui/material";
import axios from "axios";
import { setUser } from "../redux/userReducer";
import { useDispatch, useSelector } from "react-redux";

const UserProfile = () => {
  const user = useSelector((state) => state.user);
  const [editMode, setEditMode] = useState(false); // Estado para edición
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userTelephone, setUserTelephone] = useState("");

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveChanges = () => {
    // Realizar la solicitud PUT al backend con los datos actualizados

    const editedUser = {
      name: userName || user.name,
      last_name: userLastName || user.last_name,
      email: userEmail || user.email,
      telephone: userTelephone || user.telephone,
    };

    axios
      .put(`http://localhost:3000/api/user/${user.id}`, editedUser, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        dispatch(setUser(response.data));

        setEditMode(false); // Desactivar el modo de edición
      })
      .catch((error) => {
        console.error("Error al actualizar el perfil:", error);
      });
  };

  return (
    <Paper
      style={{
        maxWidth: 600,
        margin: "0 auto",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "70px",
      }}
      elevation={3}
    >
      <Avatar
        style={{
          width: "80px",
          height: "80px",
          marginBottom: "16px",
        }}
        alt="User Avatar"
      />
      <Typography variant="h5" gutterBottom>
        Perfil de Usuario
      </Typography>
      <form
        style={{ width: "100%", marginTop: "8px" }}
        onSubmit={(e) => e.preventDefault()}
      >
        <TextField
          style={{ marginBottom: "16px" }}
          label="Nombre"
          variant="outlined"
          fullWidth
          name="name"
          value={userName || user.name}
          onChange={(e) => setUserName(e.target.value || "")}
          disabled={!editMode}
        />
        <TextField
          style={{ marginBottom: "16px" }}
          label="Apellido"
          variant="outlined"
          fullWidth
          name="last_name"
          value={userLastName || user.last_name}
          onChange={(e) => setUserLastName(e.target.value)}
          disabled={!editMode}
        />
        <TextField
          style={{ marginBottom: "16px" }}
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          name="email"
          value={userEmail || user.email}
          onChange={(e) => setUserEmail(e.target.value)}
          disabled={!editMode}
        />
        <TextField
          style={{ marginBottom: "16px" }}
          label="Teléfono"
          variant="outlined"
          fullWidth          
          name="telephone"
          value={userTelephone || user.telephone}
          onChange={(e) => setUserTelephone(e.target.value)}

          disabled={!editMode}
        />
        {editMode ? (
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveChanges}
          >
            Guardar Cambios
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleEditClick}>
            Editar Perfil
          </Button>
        )}
      </form>
    </Paper>
  );
};

export default UserProfile;
