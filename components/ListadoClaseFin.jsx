"use client";
import useExcel from "@/hooks/useExcel";

function listadoClasesFin ({clases}) {

    function exportToExcel(clas) { 

        var arreglo = clas.map((clase) => {
      
          return {
            RESPONSABLE: clase.responsable,
            PROGRAMA: clase.programa,
            MATERIA: clase.materia,
            SALON: clase.salon,
            FECHAS: clase.fecha,
            "HORA INICIAL": clase.horai,
            "HORA FINAL": clase.horaf,
            "HORA INICIAL REAL": clase.horaIniReal,
            "HORA FINAL REAL": clase.horaFinalReal,
            PROGRAMAS: clase.programas.values.toString(),
            OBSERVACIONES: clase.observaciones,
          };
          });
      
      
        const { useExportToExcel } = useExcel();
      
        useExportToExcel(arreglo, "ClasesFinalizadasReporte");
      
      
      }



    return (
        <>
        <div className="container">
        <h1>
            Listado de Clases Finalizadas
        </h1>

        <button type="button" className="btn btn-primary" onClick={() => exportToExcel(clases)}>Descargar Reporte</button>


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
    {clases.map((clase,index) => (
            
            <tr key={clase.id}>
            <th scope="row">{index+1}</th>
            <th scope="row">{clase.fecha}</th>
            <td> {clase.horai}</td>
            <td> {clase.horaf}</td>
            <td  >{clase.salon}</td>
            <td >{clase.responsable}</td>
            <td >{clase.materia}</td>
            </tr>
        ))}
  </tbody>
</table>
</div>

        </>
        
    )
}

export default listadoClasesFin