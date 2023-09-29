import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/userReducer";
import axios from "axios";

const UserProfile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleInputChange = (fieldName, value) => {
    dispatch(setUser({ ...user, [fieldName]: value }));
  };

  const handleSaveClick = async () => {
    /* if (user && user.id) { */
    try {
      // Realiza la solicitud PUT solo si user.id está definido
      const response = await axios.put(`http://localhost:3000/api/editUser/1`);
      // Manejar la respuesta aquí
      console.log("Solicitud PUT exitosa:", response.data);
    } catch (error) {
      console.error("Error al realizar la solicitud PUT:", error);
    }
    /*   } else {
      console.error("El ID del usuario no está definido o es inválido.");
    } */
  };

  return (
    <div>
      <input
        type="text"
        value={user.name}
        placeholder="Nombre"
        onChange={(e) => handleInputChange("name", e.target.value)}
      />
      <input
        type="text"
        value={user.last_name}
        placeholder="Apellido"
        onChange={(e) => handleInputChange("last_name", e.target.value)}
      />
      <input
        type="email"
        value={user.email}
        placeholder="Email"
        onChange={(e) => handleInputChange("email", e.target.value)}
      />
      <input
        type="text"
        value={user.telephone}
        placeholder="Teléfono"
        onChange={(e) => handleInputChange("telephone", e.target.value)}
      />
      <input
        type="password"
        value={user.password}
        placeholder="Contraseña"
        onChange={(e) => handleInputChange("password", e.target.value)}
      />
      <button onClick={handleSaveClick}>Guardar</button>
      <input
        type="text"
        value={user.id}
        placeholder="ID"
        onChange={(e) => handleInputChange("ID", e.target.value)}
      />
    </div>
  );
};

export default UserProfile;
