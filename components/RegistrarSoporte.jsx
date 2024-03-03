"use client";

import { useEffect, useState } from "react";
import ModalRegistros from "@/components/ModalRegistros";

function RegistrarSoporte({ profes, llave }) {
  const [nombre, setNombre] = useState("");
  const [programa, setPrograma] = useState("");
  const [materia, setMateria] = useState("");
  const [salon, setSalon] = useState("");
  const [horaIni, setHoraIni] = useState("");
  const [horaFini, setHoraFini] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isDisabledObs, setIsDisabledObs] = useState(true);
  const [isDisabledBoton, setIsDisabledBoton] = useState(false);
  const keyProfe = llave;

  useEffect(() => {
    if (
      profes !== undefined &&
      profes !== null &&
      Object.keys(profes).length > 0
    ) {
      setProfesor();
    } else {
      setVacio();
    }
  }, [profes]);

  function setProfesor() {
    setNombre(profes.NombreDocente);
    setPrograma(profes.Programa);
    setMateria(profes.Materia);
    setSalon(profes.EspacioFisico);
    setHoraIni(profes.HoraInicial);
    setHoraFini(profes.HoraFinal);
    setIsDisabled(true);
  }

  function setVacio() {
    setNombre("");
    setPrograma("");
    setMateria("");
    setSalon("");
    setHoraIni("");
    setHoraFini("");
    setIsDisabled(false);
    setIsDisabledObs(true);
  }

  return (
    <div className="container">
      <div>
        <div className="row">
          <div className="col">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Responsable
            </label>
            <input
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              disabled={isDisabled}
            ></input>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Programa académico / Área
            </label>
            <input
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={programa}
              onChange={(e) => setPrograma(e.target.value)}
              disabled={isDisabled}
            ></input>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Materia / Depedencia
            </label>
            <input
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={materia}
              onChange={(e) => setMateria(e.target.value)}
              disabled={isDisabled}
            ></input>
          </div>
          <div className="col">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Salón
            </label>
            <input
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={salon}
              onChange={(e) => setSalon(e.target.value)}
              disabled={isDisabled}
            ></input>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Hora inicial
            </label>
            <input
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              type="time"
              value={horaIni}
              onChange={(e) => setHoraIni(e.target.value)}
              disabled={isDisabled}
            />
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Hora final
            </label>
            <input
              type="time"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={horaFini}
              onChange={(e) => setHoraFini(e.target.value)}
              disabled={isDisabled}
            />
          </div>
        </div>
        <div className="row">
          <label htmlFor="" className="form-label">
            ¿Finalizó la actividad?
          </label>
          <div className="col">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="No"
              onChange={() => setIsDisabledObs(false)}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              NO
            </label>
          </div>
          <div className="col">
          <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="No"
              onChange={() => setIsDisabledObs(true)}
              disabled={isDisabledBoton}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              SI
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Observaciones
            </label>
            <textarea
              className="form-control mb-3"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(e) => {
                setObservaciones(e.target.value);
                if (e.target.value !== "") {
                  setIsDisabledBoton(true);
                } else {
                  setIsDisabledBoton(false);
                }
              }}
              disabled={isDisabledObs}
            ></textarea>
            <ModalRegistros
              nombre={nombre}
              programa={programa}
              materia={materia}
              salon={salon}
              horaFini={horaFini}
              horaIni={horaIni}
              observaciones={observaciones}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrarSoporte;
