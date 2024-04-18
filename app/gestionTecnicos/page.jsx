"use client";

import ListadoTecnicos from "@/components/ListadoTecnicos";
import Navigation from "@/components/Navigation";
import ModalAgregarTecnico from "@/components/ModalAgregarTecnico";
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

  const [tecnico, setTecnico] = useState({})

  const tecnicos =  async () => {
    var res = await fetch("/api/listadoTecnico", {
      method: "POST",
      body: JSON.stringify({ mensaje: "mensaje" }),
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      mode: "cors",
    }).then(res => res.json());

    res = res.sort((a,b) => {
      if(a.username < b.username) {
        return -1;
      }
    });
    setTecnico(res);

  }

  useEffect(() => {
    ValidarSesion();
    tecnicos();
  }, []);

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
                <ListadoTecnicos tecnicos={tecnico} />
              </tbody>
            </table>
          </div>
            </div>   
        </div>
        </>
    );

}

export default Page;