"use client";
import ListadoClasesFin from "@/components/ListadoClaseFin"
import Navigation from "@/components/Navigation";
import useExcel from "@/hooks/useExcel";


async function consulta() {
  const res = await fetch('http://localhost:3000/api/listadoClasesFin', {
    method: "POST",
    body: JSON.stringify({"mensaje":"mensaje"}),
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    mode: "cors"
  });

  //console.log(res);
  const dat = await res.json();
  console.log(dat);
  return (dat);
}

async function exportToExcel() { 

  const clases = await consulta();

  var arreglo = clases.map((clase) => {

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
 
async function page(){

  const clases = await consulta();
  //console.log(clases);
  
    return (
        <>
        <Navigation />
        <div className="container">
        <h1>
            Listado de Clases Finalizadas
        </h1>

        <button type="button" className="btn btn-primary" onClick={() => exportToExcel()}>Descargar Reporte</button>


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
      <ListadoClasesFin clases = {clases}/>
  </tbody>
</table>
</div>
</>
    )

}

export default page;