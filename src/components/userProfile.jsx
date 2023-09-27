import React from "react";
import {
  Avatar,
  Button,
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
} from "@mui/material";

const UserProfile = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Grid item>
            <Avatar sx={{ width: 100, height: 100 }}>U</Avatar>
          </Grid>
          <Grid item>
            <Typography variant="h5">Nombre del Usuario</Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              Editar perfil
            </Button>
          </Grid>
          <Grid item>
            <Typography variant="h6">Información Personal</Typography>
            <TextField
              label="Nombre"
              value="Nombre del Usuario"
              fullWidth
              disabled
            />
            <TextField
              label="Apellido"
              value="Apellido del Usuario"
              fullWidth
              disabled
            />
            <TextField
              label="Correo Electrónico"
              value="usuario@example.com"
              fullWidth
              disabled
            />
            <TextField
              label="Teléfono"
              value="123-456-7890"
              fullWidth
              disabled
            />
            <TextField
              label="Contraseña"
              value="********"
              type="password"
              fullWidth
              disabled
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default UserProfile;
