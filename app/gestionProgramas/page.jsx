import ListadoProgramas from "@/components/ListadoProgramas";
import ModalAgregarProgramas from "@/components/ModalAgregarProgramas";
import Navigation from "@/components/Navigation";

async function consulta() {
  const res = await fetch("http://localhost:3000/api/listadoProgramas", {
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
    if(a.programa < b.programa) {
      return -1;
    }
  });


  return dat;
}

async function page() {
  let programas = await consulta();

 

  return (
    <>
      <Navigation />

      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Listado de Programas</h1>
            <ModalAgregarProgramas />
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col"> N°</th>
                  <th scope="col"> Nombre del Programa</th>
                  <th scope="col"> Gestion</th>
                </tr>
              </thead>
              <tbody>
                <ListadoProgramas programas={programas} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
