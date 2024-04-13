// Modal.tsx
import React, { useState } from "react";

import axios from "axios";

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

interface ModalActualizarProps {
  isOpen: boolean;
  onClose: () => void;
  rowData: Inspeccion;
}

const ModalActualizar: React.FC<ModalActualizarProps> = ({
  isOpen,
  onClose,
  rowData,
}) => {
  const [formData, setFormData] = useState<Partial<Inspeccion>>(rowData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      await axios.put(
        `http://localhost:80/inspecciones/put/${rowData.IdInspeccionVehiculo}`,
        formData
      );
      onClose();
    } catch (error) {
      console.error("Error al actualizar inspección:", error);
    }
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2 className="tituloA">Actualizar Inspección</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <label htmlFor="fecha">Fecha</label>
                <input
                  type="date"
                  id="fecha"
                  name="fecha"
                  value={formData.fecha}
                  onChange={handleChange}
                />
              </div>
              <div className="container">
                <div className="border-text">Datos básicos del conductor</div>
                <div className="input-wrapper">
                  <label htmlFor="nombrec">Nombre</label>
                  <input
                    type="text"
                    id="nombrec"
                    name="nombrec"
                    value={formData.nombrec || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="apellidoc">Apellido</label>
                  <input
                    type="text"
                    id="apellidoc"
                    name="apellidoc"
                    value={formData.apellidoc || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="edad">Edad</label>
                  <input
                    type="text"
                    id="edad"
                    name="edad"
                    value={formData.edad || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="container">
                <div className="border-text">Datos del vehiculo</div>
                <div className="input-wrapper">
                  <label htmlFor="nombrev">Nombre</label>
                  <input
                    type="text"
                    id="nombrev"
                    name="nombrev"
                    value={formData.nombrev || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="placav">Placa</label>
                  <input
                    type="text"
                    id="placav"
                    name="placav"
                    value={formData.placav || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="marcav">Marca</label>
                  <input
                    type="text"
                    id="marcav"
                    name="marcav"
                    value={formData.marcav || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <p>¿El vehículo es propio o arrendado?*</p>
                <div>
                  <input
                    type="radio"
                    id="propio"
                    name="propietario"
                    value="Propio"
                    checked={formData.propietario === "Propio"}
                    onChange={handleChange}
                  />
                  <label htmlFor="propio">Propio</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="arrendado"
                    name="propietario"
                    value="Arrendado"
                    checked={formData.propietario === "Arrendado"}
                    onChange={handleChange}
                  />
                  <label htmlFor="arrendado">Arrendado</label>
                </div>
              </div>
              <div className="container-single-column">
                <div className="border-text">Realizar Inspeccion</div>
                <div className="input-wrapperk">
                  <label htmlFor="kilometraje">Kilometraje *: </label>
                  <input
                    type="text"
                    id="kilometraje"
                    name="kilometraje"
                    value={formData.kilometraje}
                    onChange={handleChange}
                  />
                  <label htmlFor="kilometraje"> KM</label>
                </div>
                <h4 className="h4">Elementos a Inspeccionar</h4>
                <div className="container-two-columns">
                  <div className="card">
                    <h4>Direccionales</h4>
                    <div>
                      <div className="two-column-container">
                        <div className="column1">
                          <h4>•Direccionales Delanteras</h4>
                        </div>
                        <div className="column2">
                          <div>
                            <h4 className="p">Buenas</h4>
                            <div className="radio-containerB">
                              <div className="radio-wrapperB">
                                <input
                                  type="radio"
                                  id="buenasD"
                                  name="direccionalesd"
                                  value="Buenas"
                                  checked={formData.direccionalesd === "Buenas"}
                                  onChange={handleChange}
                                />
                                <label
                                  htmlFor="buenasD"
                                  className="custom-radio-labelB"
                                ></label>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="p">Malas</h4>
                            <div className="radio-containerM">
                              <div className="radio-wrapperM">
                                <input
                                  type="radio"
                                  id="malasD"
                                  name="direccionalesd"
                                  value="Malas"
                                  checked={formData.direccionalesd === "Malas"}
                                  onChange={handleChange}
                                />
                                <label
                                  htmlFor="malasD"
                                  className="custom-radio-labelM"
                                ></label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="two-column-container">
                        <div className="column1">
                          <h4>•Direccionales Traseras</h4>
                        </div>
                        <div className="column2">
                          <div className="radio-containerB">
                            <div className="radio-wrapperB">
                              <input
                                type="radio"
                                id="buenasT"
                                name="direccionalest"
                                value="Buenas"
                                checked={formData.direccionalest === "Buenas"}
                                onChange={handleChange}
                              />
                              <label
                                htmlFor="buenasT"
                                className="custom-radio-labelB"
                              ></label>
                            </div>
                          </div>
                          <div className="radio-containerM">
                            <div className="radio-wrapperM">
                              <input
                                type="radio"
                                id="malasT"
                                name="direccionalest"
                                value="Malas"
                                checked={formData.direccionalest === "Malas"}
                                onChange={handleChange}
                              />
                              <label
                                htmlFor="malasT"
                                className="custom-radio-labelM"
                              ></label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="button-container">
                <button type="submit" className="btn btn-submit">
                  Actualizar
                </button>
                <button
                  type="button"
                  className="btn btn-close"
                  onClick={onClose}
                >
                  Cerrar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalActualizar;
