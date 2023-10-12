import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchPrice from "./SearchPrice";
import { Link } from "react-router-dom";
import "./PropertySearch.css";
import SearchIcon from "@mui/icons-material/Search";

const PropertySearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);

      // Realiza la solicitud GET al servidor para buscar propiedades
      const response = await axios.get(
        `http://localhost:3000/api/property/search/${searchQuery}`
      );

      // Actualiza los resultados de la búsqueda
      setSearchResults(response.data);

      setSearchQuery("");

      setLoading(false);
    } catch (error) {
      console.error("Error al buscar propiedades:", error);
      setLoading(false);
    }
  };

  const onSearch = (minPrice, maxPrice) => {
    axios
      .get(
        `http://localhost:3000/api/property/search/price/${minPrice}/${maxPrice}`
      )
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error("Error al buscar propiedades:", error);
      });
  };

  return (
    <div>
      <SearchPrice onSearch={onSearch} />
      <input
        type="text"
        placeholder="Busca por nombre o locación"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      {loading && <p>Cargando resultados...</p>}

      {searchResults.length > 0 && (
        <ul className="property-list">
          {searchResults.map((property) => (
            <li
              key={property.id}
              className="property-list-item"
              onClick={() => setSearchResults([])}
            >
              <Link to={`/property/${property.id}`} className="property-link">
                {property.tipe}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PropertySearch;
