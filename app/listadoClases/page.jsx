"use client";
import ListadoClases from "@/components/ListadoClase"

async function tabla() {
  const res = await fetch("http://localhost:3000/api/listados", {
    method: "GET",
    cache: "default",
    mode: "cors"
  });

  //console.log(res);
  const dat = await res.json();
  //console.log(dat);
  return (dat);
  
} 

async function consulta() {
  const res = await fetch('http://localhost:3000/api/listados', {
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

 
async function page(){

  const clases = await consulta();
  //console.log(clases);
  
    return (
        <>

        <h1>
            Listado de Clasess
        </h1>

        <button type="button" className="btn btn-primary">Actualizar</button>

        <button type="button" className="btn btn-success">Buscar</button>

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
      <th scope="col">Gestión</th>
    </tr>
  </thead>
  <tbody>
      <ListadoClases clases = {clases}/>
  </tbody>
</table>

</>
    )

}

export default page;