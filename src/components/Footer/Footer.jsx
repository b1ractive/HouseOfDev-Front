import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="">
        House Of Dev
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "600px",
          justifyContent: "center", // Centrar verticalmente
          alignItems: "center",
        }}
      >
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 0,
            mt: "auto",
            backgroundColor: "#FE4236",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%", // Establecer el ancho al 100%
          }}
        >
          <Container
            maxWidth="xs"
            sx={{
              width: "100%", // Establecer el ancho al 100%
              padding: 0, // Cambiar el padding horizontal a 0 para que ocupe todo el ancho
            }}
          >
            <Typography variant="body1">
              Tú vivienda la encontras aca
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
