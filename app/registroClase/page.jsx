"use client";

import RegistrarClase from "@/components/RegistrarClase";
import { useState } from "react";

async function login(cedula) {
  const res = await fetch("/api/buscarProfe", {
    method: "POST",
    body: JSON.stringify({ cedula }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const dat = await res.json();
  const data = dat[0];
  if (dat.length !== 0) {
    return data;
  }
}

function RegisterPage() {
  const [cedula, setCedula] = useState("0");
  const [datos, setDatos] = useState({});
  const [isReady, setIsReady] = useState(false);

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
        onClick={async () => {
          login(cedula).then((data) => setDatos(data));
        }}
      >
        Buscar
      </button>
      <div className="">
        <RegistrarClase profes={datos} />
      </div>
    </div>
  );
}

export default RegisterPage;
