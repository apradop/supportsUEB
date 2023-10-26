"use client";

import { useState } from "react";

function RegistrarClase({ profes }) {
  const [nombre, setNombre] = useState("");
  const [programa, setPrograma] = useState("");
  const [materia, setMateria] = useState("");
  const [salon, setSalon] = useState("");
  const [horaIni, setHoraIni] = useState("");
  const [horaFini, setHoraFini] = useState("");
  const [herramientas, setHerramientas] = useState("");
  const [observaciones, setObservaciones] = useState("");

  let val = false;

  if (
    profes !== undefined &&
    profes !== null &&
    Object.keys(profes).length > 0
  ) {
    val = true;
  }

  return (
    <div className="container">
      {val ? (
        <div>
          <div className="row">
            <div className="col">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Responsable
              </label>
              <input
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={profes.NombreDocente}
                onChange={(e) => setNombre(e.target.value)}
              ></input>
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Programa académico
              </label>
              <input
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={profes.Programa}
                onChange={(e) => setPrograma(e.target.value)}
              ></input>
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Materia
              </label>
              <input
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={profes.Materia}
                onChange={(e) => setMateria(e.target.value)}
              ></input>
            </div>
            <div className="col">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Salón
              </label>
              <input
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={profes.EspacioFisico}
                onChange={(e) => setSalon(e.target.value)}
              ></input>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Hora inicial
              </label>
              <input
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                type="time"
                value={profes.HoraInicial}
                onChange={(e) => setHoraIni(e.target.value)}
              />
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Hora final
              </label>
              <input
                type="time"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                value={profes.HoraFinal}
                onChange={(e) => setHoraFini(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Herramientas a utilizar
              </label>
              <select className="form-select" id="inputGroupSelect01">
                <option>Opciones...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Observaciones
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
              <button className="btn btn-primary mb-3">Registrar</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="row">
            <div className="col">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Responsable
              </label>
              <input
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              ></input>
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Programa académico
              </label>
              <input
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={programa}
                onChange={(e) => setPrograma(e.target.value)}
              ></input>
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Materia
              </label>
              <input
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={materia}
                onChange={(e) => setMateria(e.target.value)}
              ></input>
            </div>
            <div className="col">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Salón
              </label>
              <input
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={salon}
                onChange={(e) => setSalon(e.target.value)}
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
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Herramientas a utilizar
              </label>
              <select className="form-select" id="inputGroupSelect01">
                <option>Opciones...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Observaciones
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
              <button className="btn btn-primary mb-3">Registrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegistrarClase;
