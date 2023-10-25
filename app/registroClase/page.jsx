"use client";

function RegisterPage() {

  const paramsObj = {actionID:'consultardatos', Fecha_ini:'2023-04-24', Fecha_Fin:'2023-04-30', Num_Docente:'', Num_Estudiante:'1000615837'};
  const searchParams = new URLSearchParams(paramsObj);


  async function login() {
    
        const res = await fetch('/api/buscarProfe', {
          method: "POST",
          body: JSON.stringify({}),
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        console.log(res)
        const data = await res.text()
        console.log(data)

    
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
        />
      </div>
      <button className="btn btn-primary mb-3" onClick={() => {
        login()
      }}>
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
        ></input>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Programa académico
        </label>
        <input
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></input>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Salón
        </label>
        <input
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></input>
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Hora inicial
        </label>
        <input
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          type="time"
        />
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Hora final
        </label>
        <input
          type="time"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
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
