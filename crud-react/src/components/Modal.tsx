// Modal.tsx
import React from "react";
import checked from "../assets/checked.png";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  onClear: () => void;
  formData: {
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
  };
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  onClear,
  formData,
  onChange,
}) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            
            <h2 className="tituloA">Agregar Inspección</h2>
            <form onSubmit={onSubmit}>
              <div className="input-wrapper">
                <label htmlFor="fecha">Fecha</label>
                <input
                  type="date"
                  id="fecha"
                  name="fecha"
                  value={formData.fecha}
                  onChange={onChange}
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
                    value={formData.nombrec}
                    onChange={onChange}
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="apellidoc">Apellido</label>
                  <input
                    type="text"
                    id="apellidoc"
                    name="apellidoc"
                    value={formData.apellidoc}
                    onChange={onChange}
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="edad">Edad</label>
                  <input
                    type="text"
                    id="edad"
                    name="edad"
                    value={formData.edad}
                    onChange={onChange}
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
                    value={formData.nombrev}
                    onChange={onChange}
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="placav">Placa</label>
                  <input
                    type="text"
                    id="placav"
                    name="placav"
                    value={formData.placav}
                    onChange={onChange}
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="marcav">Marca</label>
                  <input
                    type="text"
                    id="marcav"
                    name="marcav"
                    value={formData.marcav}
                    onChange={onChange}
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
                    onChange={onChange}
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
                    onChange={onChange}
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
                    onChange={onChange}
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
                                  onChange={onChange}
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
                                  onChange={onChange}
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
                                onChange={onChange}
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
                                onChange={onChange}
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
                  Guardar
                </button>
                <button type="button" className="btn btn-clear" onClick={onClear}>
                  Limpiar
                </button>
                <button type="button" className="btn btn-close" onClick={onClose}>
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

export default Modal;
