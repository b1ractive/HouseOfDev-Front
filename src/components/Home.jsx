import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import ImgBack from "../assets/Brush-2.png";

const Home = () => {
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${ImgBack})`,
        marginTop: "100px",
        height: "250px",
      }}
    >
      {/* Increase the priority of the hero background image */}
      {/* {<img style={{ display: "none" }} src={ImgBack} alt="HouseOfDev" />} */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
              sx={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Bienvenidos
            </Typography>
            <Typography
              variant="h5"
              color="inherit"
              paragraph
              sx={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Tú nueva vivienda esta aquí.
            </Typography>
            {/* <Link variant="subtitle1" href="#">
              Alquileres
            </Link> */}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Home;
