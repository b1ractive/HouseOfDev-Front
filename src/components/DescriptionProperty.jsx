import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PlaceIcon from "@mui/icons-material/Place";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DescriptionIcon from "@mui/icons-material/Description";
import { Button } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const DescriptionProperty = () => {
  const { propertyId } = useParams();
  const [propertyDesc, setPropertyDesc] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const user = useSelector((state) => state.user);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleReserveClick = () => {
    const formattedDate = selectedDate.toString();
    axios
      .post(`http://localhost:3000/api/appointment/reserve`, {
        propertyId: propertyId,
        date: formattedDate,
        userId: user.id,
      })
      .then((response) => {
        console.log("Reserva agregada con éxito:", response.data);
        toast.success("La reserva se agendó con éxito");
      })
      .catch((error) => {
        console.error("Error al agregar la reserva:", error);
        toast.error("Error al agregar la reserva");
      });
  };

  useEffect(() => {
    console.log("Antes de la solicitud. propertyId:", propertyId);
    axios
      .get(`http://localhost:3000/api/property/${propertyId}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("Respuesta exitosa:", response.data);
        setPropertyDesc(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        console.log("Detalles del error:", error.response);
      });
  }, [propertyId]);

  if (!propertyDesc) {
    return <div>Cargando...</div>;
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
        marginTop: "100px",
      }}
    >
      <img
        src={propertyDesc.image}
        alt={propertyDesc.tipe}
        style={{ maxWidth: "100%", height: "800px" }}
      />
      <Typography
        variant="h4"
        sx={{
          marginBottom: 2,
          marginTop: "20px",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        {propertyDesc.tipe}
      </Typography>
      <Box
        sx={{
          border: "1px solid #123AC8",
          padding: 2,
          borderRadius: 1,
          marginBottom: 2,
          width: "50%",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#123AC8",
            fontFamily: "Montserrat, sans-serif",
            marginBottom: "5px",
          }}
        >
          Precio:
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <AttachMoneyIcon sx={{ paddingRight: "5px" }} />
          USD$ {propertyDesc.price}
        </Typography>
      </Box>
      <Box
        sx={{
          border: "1px solid #123AC8",
          padding: 2,
          borderRadius: 1,
          marginBottom: 2,
          width: "50%",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#123AC8",
            fontFamily: "Montserrat, sans-serif",
            marginBottom: "5px",
          }}
        >
          Ubicación:
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <PlaceIcon sx={{ paddingRight: "5px" }} />
          {propertyDesc.location}
        </Typography>
      </Box>
      <Box
        sx={{
          border: "1px solid #123AC8",
          padding: 2,
          borderRadius: 1,
          marginBottom: 2,
          width: "50%",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#123AC8",
            fontFamily: "Montserrat, sans-serif",
            marginBottom: "5px",
          }}
        >
          Descripción:
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <DescriptionIcon sx={{ paddingRight: "8px" }} />
          {propertyDesc.description}
        </Typography>
      </Box>
      <Box
        sx={{
          border: "1px solid #123AC8",
          padding: 2,
          borderRadius: 1,
          marginBottom: 2,
          width: "50%",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#123AC8",
            fontFamily: "Montserrat, sans-serif",
            marginBottom: "5px",
          }}
        >
          Categoría:
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <MapsHomeWorkIcon sx={{ paddingRight: "8px" }} />
          {propertyDesc.category}
        </Typography>
      </Box>
      <Toaster position="top-center" reverseOrder={false} />
      <Box
        sx={{
          border: "1px solid #123AC8",
          padding: 2,
          borderRadius: 1,
          marginBottom: 2,
          width: "50%",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="Días para reservar"
              value={selectedDate}
              onChange={handleDateChange}
            />{" "}
            <Button
              variant="contained"
              color="primary"
              onClick={handleReserveClick}
            >
              Agregar Reserva
            </Button>
          </DemoContainer>
        </LocalizationProvider>
      </Box>
    </div>
  );
};

export default DescriptionProperty;
