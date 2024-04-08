"use client";
import ExportExcel from "@/components/ExportExcel"

function listadoClasesFin({ clases }) {
 

  return (
    <>
      <div className="container">
        <h1>Listado de Clases Finalizadas</h1>
        <ExportExcel clases={clases}></ExportExcel>

        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">N°</th>
                <th scope="col">Fecha</th>
                <th scope="col">Horario Inicial</th>
                <th scope="col">Horario Final</th>
                <th scope="col">Salón</th>
                <th scope="col">Responsable</th>
                <th scope="col">Materia</th>
              </tr>
            </thead>
            <tbody>
              {clases.map((clase, index) => (
                <tr key={clase.id}>
                  <th scope="row">{index + 1}</th>
                  <th scope="row">{clase.fecha}</th>
                  <td> {clase.horai}</td>
                  <td> {clase.horaf}</td>
                  <td>{clase.salon}</td>
                  <td>{clase.responsable}</td>
                  <td>{clase.materia}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default listadoClasesFin;



















