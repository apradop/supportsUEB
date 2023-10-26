"use client";

import { useState } from "react";

function RegisterPage() {
  const [cedula, setCedula] = useState("");

  const [nombre, setNombre] = useState("");
  const [programa, setPrograma] = useState("");
  const [materia, setMateria] = useState("");
  const [salon, setSalon] = useState("");
  const [horaIni, setHoraIni] = useState("");
  const [horaFini, setHoraFini] = useState("");
  const [herramientas, setHerramientas] = useState("");
  const [observaciones, setObservaciones] = useState("");

  const [isReady, setIsReady] = useState(false);

  async function login(cedula) {
    const res = await fetch("/api/buscarProfe", {
      method: "POST",
      body: JSON.stringify({ cedula }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setNombre(data[0].NombreDocente);
    setPrograma(data[0].Programa);
    setSalon(data[0].EspacioFisico);
    setHoraIni(data[0].HoraInicial);
    setHoraFini(data[0].HoraFinal);
    setMateria(data[0].Materia);
  }

  return (
    <div>
      <h1>Registrar salón</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Cédula
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
          min="1"
          value={cedula}
          onChange={(e) => setCedula(e.target.value)}
        />
      </div>
      <button
        className="btn btn-primary mb-3"
        onClick={() => {
          login(cedula);
        }}
      >
        Buscar
      </button>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Responsable
        </label>
        <input
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        ></input>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Programa académico
        </label>
        <input
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={programa}
          onChange={(e) => setPrograma(e.target.value)}
        ></input>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Materia
        </label>
        <input
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={materia}
          onChange={(e) => setMateria(e.target.value)}
        ></input>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
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
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Herramientas a utilizar
        </label>
        <select className="form-select" id="inputGroupSelect01">
          <option>Opciones...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Observaciones
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </div>
  );
}

export default RegisterPage;
