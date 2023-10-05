import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GridProperty = () => {
  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/property/", { withCredentials: true })
      .then((response) => {
        setPropertyData(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const limitedPropertyData = propertyData.slice(0, 4);

  return (
    <Container sx={{ py: 12 }}>
      <Grid container spacing={4}>
        {limitedPropertyData.map((property) => (
          <Grid item xs={12} md={6} key={property.id}>
            <CardActionArea href={`/property/${property.id}`}>
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 220, display: { xs: "none", sm: "block" } }}
                  image={property.image}
                  alt={property.tipe}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Box
                    sx={{
                      border: 1,
                      borderColor: "#123AC8",
                      p: 1,
                      borderRadius: 1,
                      mb: 1,
                    }}
                  >
                    <Typography component="h2" variant="h5" color="#123AC8">
                      {property.tipe}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      border: 1,
                      borderColor: "#123AC8",
                      p: 1,
                      borderRadius: 1,
                      mb: 1,
                    }}
                  >
                    <Typography variant="subtitle1" color="#123AC8">
                      USD$ {property.price}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      border: 1,
                      borderColor: "#123AC8",
                      p: 1,
                      borderRadius: 1,
                      mb: 1,
                    }}
                  >
                    <Typography variant="subtitle1" paragraph color="#123AC8">
                      {property.location}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      border: 1,
                      borderColor: "#123AC8",
                      p: 1,
                      borderRadius: 1,
                      mb: 1,
                    }}
                  >
                    <Typography variant="subtitle1" color="#123AC8">
                      {property.category}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GridProperty;
