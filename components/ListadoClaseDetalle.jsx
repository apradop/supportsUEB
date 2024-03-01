import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
//import {page} from "@/app/listadoClase/page";

function ListadoClaseDetalle({
    id,
    docente,
    programa,
    materia,
    salon,
    horai,
    horaf,
    programas,
    observaciones,
}) {

  const [id1, setId] = useState(id);
  const [docente1, setDocente] = useState(docente);
  const [programa1, setPrograma] = useState(programa);
  const [materia1, setMateria] = useState(materia);
  const [salon1, setSalon] = useState(salon);
  const [horai1, setHorai] = useState(horai);
  const [horaf1, setHoraf] = useState(horaf);
  const [programas1, setProgramas] = useState(programas);
  const [observaciones1, setObservaciones] = useState(observaciones);

  const [vacio, setVacio] = useState("");
  const router = useRouter();

  const a = "#a" + id;
  const b = "a" + id;

  useEffect(() => {
    setId(id);
    setDocente(docente);
    setPrograma(programa);
    setMateria(materia);
    setSalon(salon);
    setHorai(horai);
    setHoraf(horaf);
    setProgramas(programas);
    setObservaciones(observaciones);
    console.log(docente)
  }, []);

  function imprimir(){

    console.log(id)
    console.log(docente)
    console.log(programa)
    console.log(materia)
    console.log(salon)
    console.log(horai)
    console.log(horaf)
    console.log(programas)
    console.log(observaciones)
    setId(id);
    setDocente(docente);
    setPrograma(programa);
    setMateria(materia);
    setSalon(salon);
    setHorai(horai);
    setHoraf(horaf);
    setProgramas(programas);
    setObservaciones(observaciones);

  }

  async function actualizar(id){
    const ida = id
  
    const res = await fetch('api/cambiarEstado', {
      method: "POST",
      body: JSON.stringify({id}),
      headers: {
        "Content-Type": "application/json",
      }
    })
    window.location.reload();
  }



  return(
    <div>
        <div className="justify-content-md-end">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target={a}
          onClick={() => imprimir()}
        >
          Información
        </button>
      </div>
      <div className="justify-content-md-end">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => actualizar(id)}
        >
          Finalizar
        </button>
      </div>
      {/*<!-- Modal -->*/}
      <div
        className="modal fade"
        id={b}
        data-bs-backdrop="static"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >

        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Informacion Detallada de la Clase
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
                        value={docente1}
                        
                        disabled
                      />
                      <label htmlFor="floatingPlaintextInput">Responsable</label>
                    </div>
                </div>

                <div className="col">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control-plaintext"
                        id="floatingPlaintextInput"
                        value={programa1}
                        
                        disabled
                      />
                      <label htmlFor="floatingPlaintextInput">Programa</label>
                    </div>
                </div>

                <div className="row">
                <div className="col">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control-plaintext"
                        id="floatingPlaintextInput"
                        value={materia1}
                        
                        disabled
                      />
                      <label htmlFor="floatingPlaintextInput">Materia</label>
                    </div>
                </div>

                <div className="col">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control-plaintext"
                        id="floatingPlaintextInput"
                        value={salon1}
                        
                        disabled
                      />
                      <label htmlFor="floatingPlaintextInput">Salon</label>
                    </div>
                </div>
                </div>

                <div className="row">
                <div className="col">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control-plaintext"
                        id="floatingPlaintextInput"
                        value={horai1}
                        
                        disabled
                      />
                      <label htmlFor="floatingPlaintextInput">Hora de Inicio</label>
                    </div>
                </div>

                <div className="col">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control-plaintext"
                        id="floatingPlaintextInput"
                        value={horaf1}
                        
                        disabled
                      />
                      <label htmlFor="floatingPlaintextInput">Hora de Finalizacion</label>
                    </div>
                </div>
                </div>

                <div className="row">
                <div className="col">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control-plaintext"
                        id="floatingPlaintextInput"
                        value={programas1}
                        
                        disabled
                      />
                      <label htmlFor="floatingPlaintextInput">Programas</label>
                    </div>
                </div>

                <div className="col">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control-plaintext"
                        id="floatingPlaintextInput"
                        value={observaciones1}
                        
                        disabled
                      />
                      <label htmlFor="floatingPlaintextInput">Observaciones</label>
                    </div>
                </div>
                </div>


                

                </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    </div>
  );

}

export default ListadoClaseDetalle;