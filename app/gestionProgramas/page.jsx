"use client";

import ListadoProgramas from "@/components/ListadoProgramas";
import ModalAgregarProgramas from "@/components/ModalAgregarProgramas";
import Navigation from "@/components/Navigation";
import { useEffect, useState } from "react";
import { useSession } from "@/hooks/useSession";
import { useRouter } from "next/navigation";


function Page() {
  
  const { useSessionAdmin } = useSession();
    const router = useRouter();

    function ValidarSesion() {
  
      if(useSessionAdmin() === false){
        router.push("/");
      }
  
    }

    const [programas, setProgramas] = useState({})

    const programa =  async () => {
      var res = await fetch("/api/listadoProgramas", {
        method: "POST",
        body: JSON.stringify({ mensaje: "mensaje" }),
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
        mode: "cors",
      }).then(res => res.json());

      res = res.sort((a,b) => {
        if(a.programa < b.programa) {
          return -1;
        }
      });
      setProgramas(res);
  
    }

    useEffect(() => {
      ValidarSesion();
      programa();
    }, []);

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

export default Page;
