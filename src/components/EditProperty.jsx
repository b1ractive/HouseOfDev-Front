import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import {
  Container,
  Typography,
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  Paper,
  Grid,
} from "@mui/material";

const EditProperty = () => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState({
    location: "",
    price: 0,
    description: "",
    tipe: "",
    availability: false,
    image: "",
    category: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/property/${propertyId}`, {
        withCredentials: true,
      })
      .then((response) => {
        setProperty(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar los datos de la propiedad", error);
      });
  }, [propertyId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name } = e.target;
    setProperty({ ...property, [name]: e.target.checked });
  };

  const handleSaveProperty = () => {
    axios
      .put(
        `http://localhost:3000/api/admin/editProperty/${propertyId}`,
        property
      )
      .then((response) => {
        toast.success("Propiedad actualizada!");
        setTimeout(() => {
          navigate("/");
        }, 2400);
      })
      .catch((error) => {
        console.error("Error al guardar la propiedad", error);
        toast.error("Error al actualizar propiedad.");
      });
  };

  return (
    <Container style={{ marginTop: "90px" }}>
      <Paper elevation={20} style={{ padding: "20px" }}>
        <Typography
          style={{
            fontFamily: "Montserrat",
            fontWeight: "700",
            marginBottom: "20px",
          }}
          variant="h4"
          gutterBottom
        >
          Editar Propiedad
        </Typography>
        <Toaster position="top-center" reverseOrder={false} />
        <form onSubmit={handleSaveProperty}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="tipe"
                label="Nombre de la propiedad"
                variant="outlined"
                fullWidth
                required
                value={property.tipe}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="location"
                label="Ubicación"
                variant="outlined"
                fullWidth
                required
                value={property.location}
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
                value={property.price}
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
                value={property.category}
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
                value={property.description}
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
                value={property.availability}
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
                value={property.image}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSaveProperty}
                fullWidth
              >
                Guardar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default EditProperty;
