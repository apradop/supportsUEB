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

  useEffect(() => {});

  function imprimir(){

    console.log(nombre)
    console.log(programa)
    console.log(materia)
    console.log(salon)
    console.log(horaIni)
    console.log(horaFini)
    console.log(herramientas)
    console.log(observaciones)

  }

  async function RegistrarClase() {
    const res = await fetch("/api/registrarClase", {
      method: "POST",
      body: JSON.stringify({ nombre, programa, materia, salon, fecha ,horaIni, horaFini, herramientas, observaciones }),
      headers: {
        "Content-Type": "application/json",
      },
    });


    const data = await res.json();
  
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
                  router.push("/listadoClases");
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
