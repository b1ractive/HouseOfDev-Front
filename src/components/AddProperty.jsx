import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  Paper,
} from "@mui/material";

const AddProperty = () => {
  const [propertyData, setPropertyData] = useState({
    location: "",
    price: "",
    description: "",
    tipe: "",
    availability: "",
    image: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPropertyData({
      ...propertyData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/admin/addProperty",
        propertyData
      );

      if (response.status === 201) {
        console.log("Propiedad agregada con éxito");
      }
    } catch (error) {
      console.error("Error al agregar la propiedad", error);
    }
  };

  return (
    <Container style={{ marginTop: "90px" }}>
      <Paper elevation={20} style={{ padding: "20px" }}>
        <Typography
          style={{ fontFamily: "Montserrat", fontWeight: "700" }}
          variant="h4"
          gutterBottom
        >
          Agregar Propiedad
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="location"
                label="Ubicación"
                variant="outlined"
                fullWidth
                required
                value={propertyData.location}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="price"
                label="Precio"
                variant="outlined"
                fullWidth
                required
                value={propertyData.price}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="description"
                label="Descripción"
                variant="outlined"
                fullWidth
                required
                multiline
                rows={4}
                value={propertyData.description}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="type"
                label="Tipo"
                variant="outlined"
                fullWidth
                required
                value={propertyData.type}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="availability"
                label="Disponibilidad"
                variant="outlined"
                fullWidth
                required
                value={propertyData.availability}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="image"
                label="URL de la imagen"
                variant="outlined"
                fullWidth
                required
                value={propertyData.image}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="category"
                label="Categoría"
                variant="outlined"
                fullWidth
                required
                value={propertyData.category}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: "20px" }}
              >
                Agregar Propiedad
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default AddProperty;
