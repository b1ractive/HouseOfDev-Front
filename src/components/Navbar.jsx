import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FE4236", // Rojo
    },
  },
});

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  /* const [isLoggedIn, setIsLoggedIn] = useState(false); */

  const handleClick = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorElUser(null); //  anchorElUser en null para cerrar el menú
  };

  const navbarStyle = {
    position: "fixed",
    top: 0,
    width: "100%", // Ocupa todo el ancho de la pantalla
    zIndex: 1000,
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar style={navbarStyle}>
        <Toolbar>
          <Typography
            variant="h5"
            sx={{ flexGrow: 1, fontFamily: "Montserrat, sans-serif" }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              HOD.
            </Link>
            {/*  hago click en HOD y me lleva al inicio HOD. */}
          </Typography>

          {/* {isLoggedIn ? ( // no esta hecha la logica de un usuario logueado pero para tener una idea
            <> */}

          <Button color="inherit">
            <Link
              to="/en-venta"
              style={{ textDecoration: "none", color: "white" }}
            >
              En Venta
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/alquiler"
              style={{ textDecoration: "none", color: "white" }}
            >
              Alquiler
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/agenda"
              style={{ textDecoration: "none", color: "white" }}
            >
              Agenda tu Visita
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/servicios"
              style={{ textDecoration: "none", color: "white" }}
            >
              Nuestros Servicios
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/nosotros"
              style={{ textDecoration: "none", color: "white" }}
            >
              Nosotros
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/contacto"
              style={{ textDecoration: "none", color: "white" }}
            >
              Contacto
            </Link>
          </Button>
          <div>
            <IconButton
              aria-controls="user-menu"
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
            >
              <Avatar alt="User Avatar" />
            </IconButton>
            <Menu
              id="user-menu"
              anchorEl={anchorElUser}
              keepMounted
              open={Boolean(anchorElUser)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Mi Perfil</MenuItem>
              <MenuItem onClick={handleClose}>Favoritos</MenuItem>
              <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
            </Menu>
          </div>

          {/* </> 
          ) : (   si un usuario no esta logueado muetro opcion de registar o loguear
          *         
          <> */}

          <Button color="inherit">
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "white" }}
            >
              Registrarse
            </Link>
          </Button>

          <Button color="inherit">
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              Ingresar
            </Link>
          </Button>

          {/*  </>
          )} */}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
