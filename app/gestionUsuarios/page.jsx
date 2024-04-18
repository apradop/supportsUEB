import Navigation from "@/components/Navigation";
import ListadoUsuarios from "@/components/ListadoUsuarios";
import ModalAgregarUsuario from "@/components/ModalAgregarUsuario";



async function consulta2() {
  const res = await fetch("http://localhost:3000/api/listadoUsuarios", {
    method: "POST",
    body: JSON.stringify({ mensaje: "mensaje" }),
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    mode: "cors",
  });

  let dat = await res.json();

  dat = dat.sort((a,b) => {
    if(a.username < b.username) {
      return -1;
    }
  });

  return dat;
}



async function page() {
  const usuarios = await consulta2();
  //console.log(usuarios);


  return (
    <>
      <Navigation />

      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Listado de Usuarios</h1>
            <ModalAgregarUsuario />
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col"> N°</th>
                  <th scope="col"> Nombre</th>
                  <th scope="col"> Rol</th>
                  <th scope="col"> Gestion</th>
                </tr>
              </thead>
              <tbody>
                <ListadoUsuarios usuarios={usuarios} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
