"use client";
import { useEffect, useState } from "react";

function ModalAgregarUsuario() {
  const [nombreUs, setNombreUs] = useState("");
  const [contraseñaUs, setConstraseñaUs] = useState("");
  const [rolUs, setRolUs] = useState("");

  useEffect(() => {});

  function verificarEspacios(nombre, contraseña, rol){
    if(nombre === "" || contraseña === "" || rol === "" || rol === "----Seleccione----"){
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

  async function agregarUsuario(nombre, contraseña, rol) {
    if(verificarEspacios(nombre,contraseña,rol) === true){
      let rolf;
      if(rol === "Usuario"){
        rolf = "user";
      }else if(rol === "Administrador"){
        rolf = "admin";
      } 
      const res = await fetch("/api/agregarUsuario", {
        method: "POST",
        body: JSON.stringify({
          nombre,
          contraseña,
          rolf
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
          data-bs-target="#exampleModal"
        >
          Agregar Usuario
        </button>
      </div>
      {/*<!-- Modal -->*/}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Agregar un nuevo usuario
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
                      Nombre de Usuario
                    </label>
                    <input
                      type="text"
                      className="form-control-plaintext"
                      id="idNombre"
                      onChange={(e) => setNombreUs(e.target.value)}
                    />
                  </div>

                  <div className="col">
                    <label htmlFor="floatingPlaintextInput">Contraseña</label>
                    <input
                      type="text"
                      className="form-control-plaintext"
                      id="idContraseña"
                      onChange={(e) => setConstraseñaUs(e.target.value)}
                    />
                  </div>

                  <div className="row">
                    <label htmlFor="floatingPlaintextInput">Rol</label>
                  </div>
                  <div className="row">
                    <select
                      className="form-select"
                      id="inputRol"
                      onChange={(e) => setRolUs(e.target.value)}
                    >
                      <option>----Seleccione----</option>
                      <option>Usuario</option>
                      <option>Administrador</option>
                    </select>
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
                  agregarUsuario(nombreUs, contraseñaUs, rolUs)}}
                
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

export default ModalAgregarUsuario;
