import React, { useState } from "react";
import axios from "axios";
import Modal from "./components/Modal";
import Table from "./components/Table";

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fecha: "",
    nombrec: "",
    apellidoc: "",
    edad: "",
    nombrev: "",
    placav: "",
    marcav: "",
    propietario: "",
    kilometraje: "",
    direccionalesd: "",
    direccionalest: "",
    // Agrega más campos según sea necesario
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async () => {
    
    try {
      const response = await axios.post(
        "http://localhost:80/inspecciones/post",
        formData
      );
      console.log("Inspección agregada:", response.data);
      setShowModal(false);
      // Realiza cualquier acción adicional, como actualizar la lista de inspecciones
    } catch (error) {
      console.error("Error al agregar inspección:", error);
    }
  };

  const handleClear = () => {
    // Función para limpiar los inputs del formulario
    setFormData({
      fecha: "",
      nombrec: "",
      apellidoc: "",
      edad: "",
      nombrev: "",
      placav: "",
      marcav: "",
      propietario: "",
      kilometraje: "",
      direccionalesd: "",
      direccionalest: "",
      // Agrega más campos según sea necesario
    });
  };

  return (
    <div className="help">
      <h2 className="tituloA">Inspeccion de Vehiculos</h2>
      <button className="btn-submit" onClick={() => setShowModal(true)}>Agregar Inspección</button>
      <Modal
        isOpen={showModal}
        onClear={handleClear}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmit}
        formData={formData}
        onChange={handleChange}
      />
      <Table/>
    </div>
    
  );
};

export default App;
