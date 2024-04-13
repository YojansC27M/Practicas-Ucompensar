// Table.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import ModalActualizar from "./ModalActualizar";
import update from "../assets/update.png";
import Borrar from "../assets/Borrar.png";

interface Inspeccion {
  IdInspeccionVehiculo: number;
  fecha: string;
  nombrec: string;
  apellidoc: string;
  edad: string;
  nombrev: string;
  placav: string;
  marcav: string;
  propietario: string;
  kilometraje: string;
  direccionalesd: string;
  direccionalest: string;
}

const Table: React.FC = () => {
  const [inspecciones, setInspecciones] = useState<any[]>([]);
  const [selectedRow, setSelectedRow] = useState<Inspeccion | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Inspeccion[]>(
          "http://localhost:80/inspecciones/get"
        );
        setInspecciones(response.data);
      } catch (error) {
        console.error("Error al obtener inspecciones:", error);
      }
    };

    fetchData();
  }, []);

  const handleBorrar = async (id: number) => {
    try {
      await axios.delete(`http://localhost:80/inspecciones/${id}`);
      setInspecciones(
        inspecciones.filter(
          (inspeccion) => inspeccion.IdInspeccionVehiculo !== id
        )
      );
    } catch (error) {
      console.error("Error al borrar inspección:", error);
    }
  };

  const handleActualizarClick = (rowData: Inspeccion) => {
    setSelectedRow(rowData);
    setIsModalOpen(true);
  };

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Nombre Conductor</th>
            <th>Apellido Conductor</th>
            <th>Edad</th>
            <th>Nombre Vehículo</th>
            <th>Placa Vehículo</th>
            <th>Marca Vehículo</th>
            <th>Propietario</th>
            <th>Kilometraje</th>
            <th>Direccionales Delanteras</th>
            <th>Direccionales Traseras</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {inspecciones.map((inspeccion) => (
            <tr key={inspeccion.IdInspeccionVehiculo}>
              <td>{inspeccion.fecha}</td>
              <td>{inspeccion.nombrec}</td>
              <td>{inspeccion.apellidoc}</td>
              <td>{inspeccion.edad}</td>
              <td>{inspeccion.nombrev}</td>
              <td>{inspeccion.placav}</td>
              <td>{inspeccion.marcav}</td>
              <td>{inspeccion.propietario}</td>
              <td>{inspeccion.kilometraje}</td>
              <td>{inspeccion.direccionalesd}</td>
              <td>{inspeccion.direccionalest}</td>
              <td>
                <div className="botones">
                  <button
                    className="icon-button"
                    onClick={() => handleActualizarClick(inspeccion)}
                  >
                    <img src={update} alt="Actualizar" />
                  </button>
                  <button
                    className="icon-button"
                    onClick={() =>
                      handleBorrar(inspeccion.IdInspeccionVehiculo)
                    }
                  >
                    <img src={Borrar} alt="Borrar" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && selectedRow && (
        <ModalActualizar
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          rowData={selectedRow}
        />
      )}
    </div>
  );
};

export default Table;
