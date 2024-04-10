"use client";
import ExportExcel from "@/components/ExportExcelSoporte"

function listadoSoporte({ soportes }) {

  return (
    <>
      <div className="container">
        <h1>Listado de Soportes</h1>
        <ExportExcel soportes={soportes}></ExportExcel>

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
            {soportes.map((soporte, index) => (
              <tr key={soporte.id}>
                <th scope="row">{index + 1}</th>
                <th scope="row">{soporte.fecha}</th>
                <td> {soporte.horai}</td>
                <td> {soporte.horaf}</td>
                <td>{soporte.salon}</td>
                <td>{soporte.responsable}</td>
                <td>{soporte.materia}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

        
      </div>
    </>
  );
}

export default listadoSoporte;
