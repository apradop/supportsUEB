"use client";
import { useEffect, useState } from "react";

function ModalAgregarProgramas() {
  const [programa, setPrograma] = useState("");

  useEffect(() => {});

  function verificarEspacios(programa){
    if(programa === ""){
      swal({
        title: "Todos los campos son obligatorios", 
        button: false,
        icon: "error",
        text: "Verifique la información e intenté nuevamente",
        timer: 2000
      });
      return false;
    }
    return true;

  }

  async function agregarProgramas(programa) {
    if(verificarEspacios(programa) === true){
      const res = await fetch("/api/agregarProgramas", {
        method: "POST",
        body: JSON.stringify({
          programa,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      window.location.reload();
    }
  }

  return (
    <div>
      <div className="justify-content-md-end">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal2"
        >
          Agregar Programa
        </button>
      </div>
      {/*<!-- Modal -->*/}
      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Agregar un nuevo programa
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <label htmlFor="floatingPlaintextInput">
                      Nombre del programa
                    </label>
                    <input
                      type="text"
                      className="form-control-plaintext"
                      id="idNombre"
                      onChange={(e) => setPrograma(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dissmiss="modal"
                onClick={() => {
                  agregarProgramas(programa);
                }}
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalAgregarProgramas;
