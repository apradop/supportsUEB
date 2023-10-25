import ListadoClases from "@/components/ListadoClase"

async function fetchUsers(){

    const res = await fetch("https://reqres.in/api/users");
    const data = await res.json();
    return data.data;
  }

async function page(){

    const users = await fetchUsers();
    //console.log(users)

    return (
        <>

        <h1>
            Listado de Clases
        </h1>

        <button type="button" className="btn btn-primary">Actualizar</button>

        <button type="button" className="btn btn-success">Buscar</button>

        <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Fecha</th>
      <th scope="col">Horario Inicial</th>
      <th scope="col">Horario Final</th>
      <th scope="col">Salón</th>
      <th scope="col">Responsable</th>
      <th scope="col">Gestión</th>
    </tr>
  </thead>
  <tbody>
  <ListadoClases users={users}/>
  </tbody>
</table>

</>
    )

}




export default page;