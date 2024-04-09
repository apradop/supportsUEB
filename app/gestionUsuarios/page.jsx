
import ListadoUsuarios from "@/components/ListadoUsuarios";
import ListadoTecnicos from "@/components/ListadoTecnicos";
import Navigation from "@/components/Navigation";
import ModalAgregarUsuario from "@/components/ModalAgregarUsuario";
import ModalAgregarTecnico from "@/components/ModalAgregarTecnico";

async function consulta() {
  const res = await fetch("http://localhost:3000/api/listadoTecnico", {
    method: "POST",
    body: JSON.stringify({ mensaje: "mensaje" }),
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    mode: "cors",
  });

  const dat = await res.json();
  return dat;
}

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

  const dat = await res.json();
  return dat;
}



async function page() {
  const tecnicos = await consulta();
  //console.log(tecnicos);
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
          <div className="col">
            <h1>Listado de Tecnicos</h1>
            <ModalAgregarTecnico />
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col"> N°</th>
                  <th scope="col"> Nombre</th>
                  <th scope="col"> Gestion</th>
                </tr>
              </thead>
              <tbody>
                <ListadoTecnicos tecnicos={tecnicos} />
              </tbody>
            </table>
          </div>
        </div>

       
      </div>
    </>
  );
}

export default page;
