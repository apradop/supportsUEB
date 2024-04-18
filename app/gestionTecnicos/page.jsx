import ListadoTecnicos from "@/components/ListadoTecnicos";
import Navigation from "@/components/Navigation";
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
  
    let dat = await res.json();

    dat = dat.sort((a,b) => {
        if(a.tecnico < b.tecnico) {
          return -1;
        }
      });

    return dat;
  }

async function page() {

    const tecnicos = await consulta();
  //console.log(tecnicos);

    return (
        <>
        <Navigation />

        <div className="container">
            <div className="row">
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