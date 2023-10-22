function RegisterPage() {
  return (
    <div>
      <h1>Formulario</h1>
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
      <button type="submit" className="btn btn-primary mb-3">
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
          <option>Choose...</option>
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
