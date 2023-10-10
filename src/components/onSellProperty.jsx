import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

const OnSellProperty = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/property/filter/category/venta")
      .then((response) => {
        setProperties(response.data);
      })
      .catch((error) => {
        console.error("Error al traer las propiedades en venta", error);
      });
  }, []);

  console.log("Estado de properties:", properties);
  return (
    <Grid container spacing={3}>
      {properties.map((property) => (
        <Grid item xs={12} sm={4} md={4} key={property.id}>
          <Card
            style={{
              height: "100%",
              marginTop: "75px",
              boxShadow: "4px 4px 6px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            <CardActionArea href={`/property/${property.id}`}>
              <CardMedia
                component="img"
                alt={property.tipe}
                height="300"
                image={property.image}
                style={{ width: "100%" }}
              />
            </CardActionArea>
            <CardContent>
              <Typography
                variant="h5"
                style={{ marginBottom: "10px", color: "#123AC8" }}
              >
                {property.tipe}
              </Typography>
              <Typography variant="subtitle1" style={{ marginBottom: "10px" }}>
                Precio: <strong>USD$ {property.price}</strong>
              </Typography>

              <Typography variant="body1" color="textSecondary">
                Ubicación: {property.location}
              </Typography>
            </CardContent>
            <IconButton>
              <FavoriteIcon />
            </IconButton>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default OnSellProperty;
