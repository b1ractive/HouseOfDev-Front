import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import fondoHOD from "../assets/fondoHOD.jpg";

const Home = () => {
  return (
    <Paper
      style={{
        backgroundImage: `url(${fondoHOD})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "91vh",
        marginTop: "65px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "black",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      ></div>
      <Container
        maxWidth="md"
        sx={{
          fontFamily: "Montserrat, sans-serif",
          textShadow: "2px 2px 4px rgba(255, 255, 255, 1.9)",
          fontSize: "3rem", // Tamaño de fuente
          lineHeight: 0.2, // Espaciado entre líneas
          textAlign: "left",
          marginBottom: "150px",
          marginRight: "390px",
        }}
      >
        <Typography variant="h2" gutterBottom>
          Bienvenidos.
        </Typography>
        <Typography variant="h4">Tu nuevo hogar está aquí.</Typography>
      </Container>
    </Paper>
  );
};

export default Home;
