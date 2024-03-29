"use client";
import useExcel from "@/hooks/useExcel";

function listadoSoporte({ soportes }) {
  function exportToExcel(sp) {
    var arreglo = sp.map((clase) => {
      return {
        TECNICO: clase.tecnico,
        RESPONSABLE: clase.responsable,
        USUARIO: clase.usuario,
        PROGRAMA: clase.programa,
        MATERIA: clase.materia,
        SALON: clase.salon,
        FECHAS: clase.fecha,
        ESTADO: clase.estado,
        OBSERVACIONES: clase.observaciones,
      };
    });

    const { useExportToExcel } = useExcel();

    useExportToExcel(arreglo, "ReporteSoportes");
  }

  //console.log(hoy.toLocaleDateString());

  return (
    <>
      <div className="container">
        <h1>Listado de Soportes</h1>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => exportToExcel(soportes)}
        >
          Descargar Reporte
        </button>

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
