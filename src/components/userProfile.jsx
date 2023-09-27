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
      <Paper elevation={3} sx={{ padding: "20px" }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Grid item>
            <Avatar sx={{ width: 100, height: 100 }}></Avatar>
          </Grid>
          <Grid item>
            <Typography variant="h5" gutterBottom>
              Perfil del Usuario
            </Typography>
          </Grid>

          <Grid item>
            <Button variant="contained" color="primary">
              Editar perfil
            </Button>
          </Grid>

          <Grid item container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h6">Información Personal</Typography>
            </Grid>
            <Grid item>
              <TextField
                label="Nombre"
                value="Nombre del usuario"
                fullWidth
                disabled
              />
            </Grid>

            <Grid item>
              <TextField
                label="Apellido"
                value="Apellido del usuario"
                fullWidth
                disabled                
              />
            </Grid>

            <Grid item>
              <TextField
                label="Correo Electrónico"
                value="santiago@ejemplo.com"
                fullWidth
                disabled
              />
            </Grid>

            <Grid item>
              <TextField
                label="Teléfono"
                value="11-4564-7890"
                fullWidth
                disabled
              />
            </Grid>
            <Grid item>
              <TextField
                label="Contraseña"
                value="********"
                type="password"
                fullWidth
                disabled
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            disabled // que el botón esté deshabilitado si no estoy en modo de edición
            style={{ marginTop: "16px" }}
          >
            Guardar cambios
          </Button>
        </Grid>
      </Paper>
    </Container>
  );
};

export default UserProfile;
