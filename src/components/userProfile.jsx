import React, { useState } from "react";
import { Paper, TextField, Button, Typography, Avatar } from "@mui/material";
import axios from "axios";
import { setUser } from "../redux/userReducer";
import { useDispatch, useSelector } from "react-redux";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import toast, { Toaster } from "react-hot-toast";

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
        toast.success("Cambios guardados con éxito!");

        setEditMode(false);
      })
      .catch((error) => {
        console.error("Error al actualizar el perfil:", error);
        toast.error("Error al guardar cambios.")
      });
  };

  return (
    <Paper
      elevation={12}
      style={{
        maxWidth: 600,
        margin: "0 auto",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "70px",
      }}
    >
      <Avatar
        alt="User Avatar"
        style={{
          width: "80px",
          height: "80px",
          marginBottom: "16px",
        }}
      />
      <Typography variant="h5" gutterBottom>
        Perfil de Usuario
      </Typography>
      <Toaster position="top-center" reverseOrder={false} />
      <form style={{ width: "100%", marginTop: "8px" }}>
        <TextField
          style={{ marginBottom: "16px" }}
          label="Nombre"
          variant="outlined"
          fullWidth
          name="name"
          value={userName || user.name}
          onChange={(e) => setUserName(e.target.value || "")}
          disabled={!editMode}
          InputProps={{
            startAdornment: (
              <PersonIcon color="primary" style={{ marginRight: "8px" }} />
            ),
          }}
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
          InputProps={{
            startAdornment: (
              <PersonIcon color="primary" style={{ marginRight: "8px" }} />
            ),
          }}
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
          InputProps={{
            startAdornment: (
              <EmailIcon color="primary" style={{ marginRight: "8px" }} />
            ),
          }}
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
          InputProps={{
            startAdornment: (
              <PhoneIcon color="primary" style={{ marginRight: "8px" }} />
            ),
          }}
        />
        <Button
          variant={editMode ? "contained" : "contained"}
          color="primary"
          onClick={editMode ? handleSaveChanges : handleEditClick}
        >
          {editMode ? "Guardar Cambios" : "Editar Perfil"}
        </Button>
      </form>
    </Paper>
  );
};

export default UserProfile;
