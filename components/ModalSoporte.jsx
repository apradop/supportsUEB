import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { El_Messiri } from "next/font/google";

function ModalRegistros({
  nombre,
  usuario,
  nombreTec,
  programa,
  materia,
  salon,
  horaIni,
  horaFini,
  herramientas,
  observaciones,
  estado,
  actividad
}) {
  const [vacio, setVacio] = useState("");
  const router = useRouter();

  const date = Date.now();
  const hoy =  new Date(date);
  console.log(hoy.toLocaleDateString());

  const fecha = hoy.toLocaleDateString();

  useEffect(() => {});

  function imprimir(){

    console.log(nombre)
    console.log(usuario)
    console.log(programa)
    console.log(materia)
    console.log(salon)
    console.log(horaIni)
    console.log(horaFini)
    console.log(observaciones)
    console.log(estado)
    console.log(actividad)

  }

  function verificarHora() {
    if (horaIni > horaFini) {
      swal({
        title: "La hora Inicial no puede ser mayor a la hora final", 
        button: false,
        icon: "error",
        text: "Verifique la información e intenté nuevamente",
        timer: 2000
      });

      return false;

    }

    return true;
  }

  function verificarEspacios() {

    if (nombre === ""  || usuario === "" ||  nombreTec === ""  || programa === "" || materia === "" || salon === "" || horaIni === "" || horaFini === "" ) {
      swal({
        title: "Todos los campos son obligatorios", 
        button: false,
        icon: "error",
        text: "Verifique la información e intenté nuevamente",
        timer: 2000
      });

      return false;
    }else if (observaciones === "" && estado === "No") {

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

  async function enviarCorreo(){
    const res2 = await fetch("/api/enviarCorreo", {
      method: "POST",
      body: JSON.stringify({usuario}),
      headers: {
        "Content-Type": "application/json",
      },
    })

    //const data2 = res2.json();
  }

  async function enviarCorreo2(){
    const res2 = await fetch("/api/enviarCorreoMesa", {
      method: "POST",
      body: JSON.stringify({usuario}),
      headers: {
        "Content-Type": "application/json",
      },
    })

    //const data2 = res2.json();
  }


  async function RegistrarSoporte() {

    //enviarCorreo();
    //enviarCorreo2();

    if(verificarHora() === true && verificarEspacios() === true){

      if(observaciones === ""){
        observaciones = "Sin observaciones";
      }

      const res = await fetch("/api/registrarSoporte", {
        method: "POST",
        body: JSON.stringify({ nombre, nombreTec , usuario,  programa, materia, salon, fecha ,horaIni, horaFini, herramientas,estado , observaciones, actividad }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
  
      const data = await res.json();

      swal({
        title: "Se ha creado el soporte correctamente", 
        button: false,
        icon: "success",
        timer: 2000
      });
      
      setTimeout(() => {
        window.location.reload();
      }, 2100);

    }
  
  }

  function ambas(){
    RegistrarSoporte();
    enviarCorreo();
    enviarCorreo2();
  }

  return (
    <div>
      <div className="justify-content-md-end">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#modal"
          onClick={() => imprimir()}
        >
          Registrar
        </button>
      </div>
      {/*<!-- Modal -->*/}
      <div
        className="modal fade"
        id="modal"
        data-bs-backdrop="static"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Registro de {nombre}
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
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control-plaintext"
                        id="floatingPlaintextInput"
                        value={programa}
                        onChange={(e) => setVacio(e.target.value)}
                        disabled
                      />
                      <label htmlFor="floatingPlaintextInput">Programa</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control-plaintext"
                        id="floatingPlaintextInput"
                        value={materia}
                        onChange={(e) => setVacio(e.target.value)}
                        disabled
                      />
                      <label htmlFor="floatingPlaintextInput">Materia</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input
                        type="time"
                        className="form-control-plaintext"
                        id="floatingPlaintextInput"
                        value={horaIni}
                        onChange={(e) => setVacio(e.target.value)}
                        disabled
                      />
                      <label htmlFor="floatingPlaintextInput">
                        Hora Inicial
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input
                        type="time"
                        className="form-control-plaintext"
                        id="floatingPlaintextInput"
                        value={horaFini}
                        onChange={(e) => setVacio(e.target.value)}
                        disabled
                      />
                      <label htmlFor="floatingPlaintextInput">Hora Final</label>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-4">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control-plaintext"
                        id="floatingPlaintextInput"
                        value={usuario}
                        onChange={(e) => setUser(e.target.value)}
                        disabled
                      />
                      <label htmlFor="floatingPlaintextInput">
                        Usuario
                      </label>
                    </div>
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
                onClick={() => {
                  
                  RegistrarSoporte();
                }}
                data-bs-dismiss="modal"
              >
                ¿Está seguro?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalRegistros;
