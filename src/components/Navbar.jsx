import React, { useState, useEffect } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userReducer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FE4236", // Rojo
    },
  },
});

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorElUser(null); //  anchorElUser en null para cerrar el menú
  };

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3000/api/auth/logout", null, {
        withCredentials: true,
      });

      dispatch(
        setUser({
          email: null,
          id: 0,
          last_name: null,
          name: null,
          telephone: null,
          is_admin: null,
        })
      );
      navigate("/");
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

  const navbarStyle = {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
    boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.7)",
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar style={navbarStyle}>
        <Toolbar>
          <Typography
            variant="h5"
            sx={{ flexGrow: 1, fontFamily: "Montserrat, sans-serif" }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
                fontSize: "45px",
              }}
            >
              HOD.
            </Link>
          </Typography>
          <Button color="inherit">
            <Link
              to="/en-venta"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
                transition: "background-color 0.3s",
              }}
            >
              En Venta
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/alquiler"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Alquiler
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/agenda"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Agenda tu Visita
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/servicios"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Nuestros Servicios
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/nosotros"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Nosotros
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/contacto"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Contacto
            </Link>
          </Button>
          {user.name ? (
            <div>
              <IconButton
                aria-controls="user-menu"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
              >
                <Avatar
                  alt="User Avatar"
                  style={{ backgroundColor: "#FF7733" }}
                />
              </IconButton>
              <Menu
                id="user-menu"
                anchorEl={anchorElUser}
                keepMounted
                open={Boolean(anchorElUser)}
                onClose={handleClose}
              >
                <Link
                  to="/profile"
                  onClick={handleClose}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem>Mi Perfil</MenuItem>
                </Link>
                <Link
                  to="/favorites"
                  onClick={handleClose}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem>Favoritos</MenuItem>
                </Link>
                <Link
                  to="/"
                  onClick={handleLogout}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem>Cerrar sesión</MenuItem>
                </Link>
              </Menu>
            </div>
          ) : (
            <div>
              <IconButton
                aria-controls="guest-menu"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
              >
                <Avatar
                  alt="User Avatar"
                  style={{ backgroundColor: "#FF7733" }}
                />
              </IconButton>
              <Menu
                id="guest-menu"
                anchorEl={anchorElUser}
                keepMounted
                open={Boolean(anchorElUser)}
                onClose={handleClose}
              >
                <Link
                  to="/register"
                  onClick={handleClose}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem>Registrarse</MenuItem>
                </Link>
                <Link
                  to="/login"
                  onClick={handleClose}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem>Ingresar</MenuItem>
                </Link>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
