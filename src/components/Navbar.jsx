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
import PersonOffIcon from "@mui/icons-material/PersonOff";
import PropertySearch from "./Search/Search";
import SearchPrice from "./Search/SearchPrice";

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const theme = createTheme({
    palette: {
      primary: {
        main: user.is_admin ? "#123AC8" : "#FE4236", // Cambia el color según el rol
      },
    },
  });

  const handleClick = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorElUser(null); //  anchorElUser en null para cerrar el menú
  };

  const handleSellClick = () => {
    navigate("/venta");
  };

  const handleRentClick = () => {
    navigate("/alquiler");
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

          <PropertySearch />
          <Button
            color="inherit"
            sx={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "rgba(200, 200, 200, 0.2)", //  el último valor para ajustar la transparencia
              },
            }}
            onClick={handleSellClick}
          >
            <Link
              to="/venta"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              En Venta
            </Link>
          </Button>
          <Button
            color="inherit"
            sx={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "rgba(200, 200, 200, 0.2)",
              },
            }}
            onClick={handleRentClick}
          >
            <Link
              to="/alquiler"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              Alquiler
            </Link>
          </Button>

          <Button
            color="inherit"
            sx={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "rgba(200, 200, 200, 0.2)",
              },
            }}
          >
            <Link
              to="/contacto"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              Contacto
            </Link>
          </Button>
          {user.is_admin && (
            <Button
              color="inherit"
              sx={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "rgba(200, 200, 200, 0.2)",
                },
              }}
            >
              <Link
                to="/admin/addProperty"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                OPCIONES ADMIN
              </Link>
            </Button>
          )}
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
                  style={{
                    backgroundColor: user.is_admin ? "#123AC8" : "#FE4236",
                    border: "2px solid white",
                  }}
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
                  <MenuItem
                    sx={{
                      "&:hover": {
                        backgroundColor: "#E0E0E0", // Cambia a tu color de hover deseado
                      },
                    }}
                  >
                    Mi Perfil
                  </MenuItem>
                </Link>

                <Link
                  to="/favorites"
                  onClick={handleClose}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem
                    sx={{
                      "&:hover": {
                        backgroundColor: "#E0E0E0",
                      },
                    }}
                  >
                    Favoritos
                  </MenuItem>
                </Link>
                <Link
                  to="/"
                  onClick={handleLogout}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem
                    sx={{
                      "&:hover": {
                        backgroundColor: "#E0E0E0",
                      },
                    }}
                  >
                    Cerrar sesión
                  </MenuItem>
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
                  style={{
                    backgroundColor: "#FF4733",
                    border: "2px solid white",
                  }}
                >
                  <PersonOffIcon />
                </Avatar>
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
                  <MenuItem
                    sx={{
                      "&:hover": {
                        backgroundColor: "#E0E0E0",
                      },
                    }}
                  >
                    Registrarse
                  </MenuItem>
                </Link>
                <Link
                  to="/login"
                  onClick={handleClose}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem
                    sx={{
                      "&:hover": {
                        backgroundColor: "#E0E0E0",
                      },
                    }}
                  >
                    Ingresar
                  </MenuItem>
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
