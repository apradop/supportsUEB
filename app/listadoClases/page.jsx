import ListadoClases from "@/components/ListadoClase"
import Navigation from "@/components/Navigation";


async function consulta() {
  const res = await fetch('http://localhost:3000/api/listadoClases', {
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
        <Navigation />
        <div className="container">
        <h1>
            Listado de Clases
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
</div>
</>
    )

}

export default page;