import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function ModalRegistros({
  nombre,
  programa,
  materia,
  salon,
  horaIni,
  horaFini,
  herramientas,
  observaciones,
}) {
  const [vacio, setVacio] = useState("");
  const router = useRouter();

  const date = Date.now();
  const hoy =  new Date(date);
  console.log(hoy.toLocaleDateString());

  const fecha = hoy.toLocaleDateString();
  const hora = hoy.getTime();
  const resutl = new Date(hora);
  let horaIniReal= "";

    if (resutl.getHours() < 10) {
      horaIniReal += "0" + resutl.getHours() + ":";
    }else{  
      horaIniReal += resutl.getHours() + ":";
    }
    
    if (resutl.getMinutes() < 10) {
      horaIniReal += "0" + resutl.getMinutes();
    }else{
      horaIniReal += resutl.getMinutes();
    }

  useEffect(() => {});

  function imprimir(){

    console.log(nombre)
    console.log(programa)
    console.log(materia)
    console.log(salon)
    console.log(horaIni)
    console.log(horaFini)
    console.log(horaIniReal)
    console.log(herramientas)
    console.log(observaciones)

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

    if (nombre === "" || programa === "" || materia === "" || salon === "" || horaIni === "" || horaFini === "" || Object.keys(herramientas.values).length === 0 ) {
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

  async function RegistrarClase() {

    if(verificarHora() === true && verificarEspacios() === true){

      imprimir();

      const res = await fetch("/api/registrarClase", {
        method: "POST",
        body: JSON.stringify({ nombre, programa, materia, salon, fecha ,horaIni, horaFini, horaIniReal,herramientas, observaciones }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
  
      const data = await res.json();

      router.push("/listadoClases");
      
      
    }
  
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
                        value={salon}
                        onChange={(e) => setVacio(e.target.value)}
                        disabled
                      />
                      <label htmlFor="floatingPlaintextInput">
                        Aula de clase
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
                  
                  RegistrarClase();
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
