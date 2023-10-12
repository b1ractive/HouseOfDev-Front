import React from "react";
import {
  Container,
  Grid,
  Typography,
  Paper,
  Avatar,
  Button,
} from "@mui/material";
import fotoContacto from "../assets/fotoContacto.jpeg";
import kevin2 from "../assets/kevin2.jpeg";
import { LinkedIn, GitHub } from "@mui/icons-material";

const contactData = [
  {
    id: 1,
    firstName: "Kevin",
    lastName: "Nuñez",
    email: "kevin.jn@gmail.com",
    occupation: "Martillero",
    age: 23,
    imageUrl: kevin2,
    linkedInProfile: "https://www.linkedin.com/in/kevin-nu%C3%B1ez-455054214/", // Agrega las URL de LinkedIn
    githubProfile: "https://github.com/b1ractive", // Agrega las URL de GitHub
  },
  {
    id: 2,
    firstName: "Santiago",
    lastName: "Zanetti",
    email: "santiagozanetti117@gmail.com",
    occupation: "Martillero",
    age: 23,
    imageUrl: fotoContacto,
    linkedInProfile: "https://www.linkedin.com/in/santiago-zanetti-545744219/",
    githubProfile: "https://github.com/santiagozanetti",
  },
];

const ContactPage = () => {
  return (
    <Container style={{ marginTop: "70px", padding: "20px" }}>
      <Typography
        style={{
          fontFamily: "Montserrat",
          fontWeight: "700",
          marginBottom: "30px",
        }}
        variant="h3"
        gutterBottom
      >
        Contacto
      </Typography>
      <Grid container spacing={4}>
        {contactData.map((person) => (
          <Grid item lg={6} md={6} sm={12} key={person.id}>
            <Paper
              elevation={6}
              style={{
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "10px",
              }}
            >
              <Avatar
                src={person.imageUrl}
                style={{ width: 100, height: 100, marginBottom: 10 }}
              />
              <Typography
                variant="h5"
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                  marginBottom: "15px",
                }}
              >
                {person.firstName} {person.lastName}
              </Typography>
              <Typography
                variant="body1"
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                  marginBottom: "15px",
                }}
              >
                Email: {person.email}
              </Typography>
              <Typography
                variant="body1"
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                  marginBottom: "15px",
                }}
              >
                Edad: {person.age} años
              </Typography>
              <Typography
                variant="body1"
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                  marginBottom: "15px",
                }}
              >
                Rubro: {person.occupation}
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                href={person.linkedInProfile}
                target="_blank"
                style={{ marginRight: "10px" }}
              >
                <LinkedIn style={{ marginRight: "5px" }} />
                LinkedIn
              </Button>
              <Button
                variant="outlined"
                color="primary"
                href={person.githubProfile}
                target="_blank"
              >
                <GitHub style={{ marginRight: "5px" }} />
                GitHub
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ContactPage;
