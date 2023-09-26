import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ImgBack from "../assets/Brush-2.png";
import ImgHouse from "../assets/HouseOfDevLogo.png";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [last_name, setLast_name] = useState("");
  const [telephone, setTelephone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [last_nameError, setLast_nameError] = useState("");
  const [telephoneError, setTelephoneError] = useState("");
  const [ConfirmPasswordError, setConfirmPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlelast_nameChange = (e) => {
    setLast_name(e.target.value);
  };

  const handleTelephoneChange = (e) => {
    setTelephone(e.target.value);
  };

  const validateEmail = () => {
    if (!email) {
      setEmailError("El correo electrónico es obligatorio.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("El correo electrónico no es válido.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("La contraseña es obligatoria.");
    } else if (password.length < 7) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres.");
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = () => {
    if (!confirmPassword) {
      setConfirmPasswordError("Confirme la contraseña.");
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Las contraseñas no coinciden.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const validateName = () => {
    if (!name) {
      setNameError("El nombre es obligatorio");
    } else if (!/^[a-zA-Z]+$/.test(name)) {
      setNameError("El nombre debe contener solo letras");
    } else {
      setNameError("");
    }
  };

  const validateLast_name = () => {
    if (!last_name) {
      setLast_nameError("El apellido es obligatorio");
    } else if (!/^[a-zA-Z]+$/.test(last_name)) {
      setLast_nameError("El apellido debe contener solo letras");
    } else {
      setLast_nameError("");
    }
  };

  const validateTelephone = () => {
    if (!telephone) {
      setTelephoneError("El número de teléfono es obligatorio");
    } else if (!/^\d{7,14}$/.test(telephone)) {
      setTelephoneError(
        "El número de teléfono debe contener entre 7 y 14 dígitos"
      );
    } else {
      setTelephoneError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateEmail();
    validatePassword();
    validateName();
    validateLast_name();
    validateTelephone();
    validateConfirmPassword();

    if (!emailError && !passwordError) {
      axios
        .post(
          "http://localhost:3000/api/auth/register",
          {
            email,
            password,
            confirmPassword,
            name,
            last_name,
            telephone,
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log("Registro exitoso:", res);
          if (res.status === 201) {
            navigate("/login");
          }
        })
        .catch((error) => {
          if (error.response) {
            const errorMessage =
              error.response.data.message || "Error de inicio de sesión";
          } else {
            console.error("Error de inicio de sesión:", error);
          }
        });
    }
  };

  const areAllFieldsCompleted = () => {
    return (
      email !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      name !== "" &&
      last_name !== "" &&
      telephone !== Number("")
    );
  };

  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <img
            src={ImgHouse}
            alt="Descripción de la imagen"
            style={{
              width: "800px",
              height: "auto",
            }}
          />
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Crear Cuenta
            </Typography>
            {loginError && (
              <Typography color="error" variant="body2">
                {loginError}
              </Typography>
            )}
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                type="text"
                id="name"
                label="Nombre"
                name="name"
                value={name}
                onChange={handleNameChange}
                onBlur={validateName}
                autoComplete="name"
                error={!!nameError}
                helperText={nameError}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                type="text"
                id="last_name"
                label="Apellido"
                name="last_name"
                value={last_name}
                onChange={handlelast_nameChange}
                onBlur={validateLast_name}
                autoComplete="last_name"
                error={!!last_nameError}
                helperText={last_nameError}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={handleEmailChange}
                onBlur={validateEmail}
                error={!!emailError}
                helperText={emailError}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                type="tel"
                id="telephone"
                label="Teléfono"
                name="telephone"
                value={telephone}
                onChange={handleTelephoneChange}
                onBlur={validateTelephone}
                autoComplete="telephone"
                error={!!telephoneError}
                helperText={telephoneError}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={handlePasswordChange}
                onBlur={validatePassword}
                error={!!passwordError}
                helperText={passwordError}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                type="password"
                name="confirmPassword"
                label="Confirmar Contraseña"
                id="confirmPassword"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                onBlur={validateConfirmPassword}
                error={!!ConfirmPasswordError}
                helperText={ConfirmPasswordError}
              />
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{
                  mt: 3,
                  mb: 2,
                  borderRadius: "16px",
                  border: "1px solid #0074e4",
                  fontFamily: "Montserrat, sans-serif",
                }}
                disabled={!areAllFieldsCompleted()}
              >
                Ingresar
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${ImgBack})`,
            objectFit: "contain",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
    </ThemeProvider>
  );
};
export default Register;
