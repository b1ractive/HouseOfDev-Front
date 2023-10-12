import React, { useState } from "react";

const SearchPrice = ({ onSearch }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convierte los valores de minPrice y maxPrice a números (asegurándote de manejar posibles errores)
    const minPriceNumber = parseFloat(minPrice);
    const maxPriceNumber = parseFloat(maxPrice);

    // Verifica que ambos valores sean números válidos
    if (!isNaN(minPriceNumber) && !isNaN(maxPriceNumber)) {
      // Realiza la búsqueda con los valores de precio mínimo y máximo
      onSearch(minPriceNumber, maxPriceNumber);
    } else {
      alert("Por favor, ingresa valores de precio válidos.");
    }
  };

  const handleChange = (e) => {
    // Actualiza el estado en función de los cambios en los campos de entrada
    if (e.target.name === "minPrice") {
      setMinPrice(e.target.value);
    } else if (e.target.name === "maxPrice") {
      setMaxPrice(e.target.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="minPrice"
        placeholder="Precio mínimo"
        value={minPrice}
        onChange={handleChange}
      />
      <input
        type="number"
        name="maxPrice"
        placeholder="Precio máximo"
        value={maxPrice}
        onChange={handleChange}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchPrice;
