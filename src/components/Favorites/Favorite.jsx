import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const containerStyle = {
  maxWidth: "800px",
  margin: "150px auto",
};

const cardStyle = {
  marginBottom: "10px",
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Favorites() {
  const [favoritos, setFavoritos] = useState([]);
  const [option, setOption] = useState(false);
  const [idEliminar, setIdEliminar] = useState("");
  const user = useSelector((state) => state.user);
  const userId = user.id;
  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    const obtenerFavoritos = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/favorite/${userId}/favorites`
        );
        setFavoritos(response.data.favoritos);
      } catch (error) {
        console.error("Error al obtener favoritos:", error);
      }
    };

    obtenerFavoritos();
  }, [favoritos]); // Agregar userId como dependencia para que se actualice cuando cambie

  const handleCLickEliminar = (id) => {
    setIdEliminar(id);
    setOption(!option);
  };

  const handleCLick = (id) => {
    axios.delete(`http://localhost:3000/api/favorite/${userId}/delete/${id}`);
    setOption(!option);
  };

  const openModal = async (propertyId) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/property/${propertyId}`
      );
      setSelectedProperty(response.data); // Asigna los detalles de la propiedad a selectedProperty
      setOpen(true); // Abre el modal
    } catch (error) {
      console.error("Error al obtener detalles de la propiedad:", error);
    }
  };

  return (
    <div style={containerStyle}>
      <h1>Tus Favoritos</h1>
      {favoritos?.map((favorito) => (
        <Card key={favorito.id} style={cardStyle}>
          <CardActionArea>
            <CardContent>
              <Typography variant="h5" component="div">
                {favorito.id}
              </Typography>
              <Typography color="textSecondary">{favorito.location}</Typography>
              <Typography variant="body2" component="p">
                Propiedad: {favorito.propertyId}
              </Typography>
              <button
                onClick={() => handleCLickEliminar(favorito.id)} // Utiliza favorito.favoritoId en lugar de favorito.id
                style={{ backgroundColor: "#f44336", color: "white" }}
              >
                Eliminar
              </button>
              <button
                onClick={() => openModal(favorito.propertyId)}
                style={{ backgroundColor: "#2196F3", color: "white" }}
              >
                Detalles
              </button>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="property-details-modal"
        aria-describedby="property-details-description"
      >
        <div style={modalStyle}>
          {selectedProperty && (
            <>
              <h2 id="property-details-modal">{selectedProperty.tipe}</h2>
              <p id="property-details-description">
                Ubicación: {selectedProperty.location}
              </p>
              <p id="property-details-description">
                Categoría: {selectedProperty.category}
              </p>
              <p id="property-details-description">
                <strong>USD$ {selectedProperty.price}</strong>
              </p>
            </>
          )}
        </div>
      </Modal>
      {option && (
        <div style={{ ...cardStyle, display: "flex", alignItems: "center" }}>
          <p>¿Seguro que deseas eliminar este favorito?</p>
          <button
            onClick={() => handleCLick(idEliminar)}
            style={{ backgroundColor: "#f44336", color: "white" }}
          >
            Sí
          </button>
          <button
            onClick={() => setOption(!option)}
            style={{ backgroundColor: "#4caf50", color: "white" }}
          >
            Cancelar
          </button>
        </div>
      )}
    </div>
  );
}

export default Favorites;
