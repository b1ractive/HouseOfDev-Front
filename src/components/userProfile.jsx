import React, { useState } from "react";
import { Paper, TextField, Button, Typography, Avatar } from "@mui/material";

const UserProfile = ({ user }) => {
  const [editMode, setEditMode] = useState(false); // Estado para edición

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveChanges = () => {
    // ver como implementar esta fucnion para guardar los cambios
    setEditMode(false);
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
      <form style={{ width: "100%", marginTop: "8px" }}>
        <TextField
          style={{ marginBottom: "16px" }}
          label="Nombre"
          variant="outlined"
          fullWidth
          value={user.name}
          disabled={!editMode}
        />
        <TextField
          style={{ marginBottom: "16px" }}
          label="Apellido"
          variant="outlined"
          fullWidth
          value={user.last_name}
          disabled={!editMode}
        />
        <TextField
          style={{ marginBottom: "16px" }}
          label="Email"
          variant="outlined"
          fullWidth
          value={user.email}
          disabled={!editMode}
        />
        <TextField
          style={{ marginBottom: "16px" }}
          label="Teléfono"
          variant="outlined"
          fullWidth
          value={user.telephone}
          disabled={!editMode}
        />
        <TextField
          style={{ marginBottom: "16px" }}
          label="Contraseña"
          type="password"
          variant="outlined"
          fullWidth
          value={user.password}
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
