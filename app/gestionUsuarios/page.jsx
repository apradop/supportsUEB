"use client";

import Navigation from "@/components/Navigation";
import ListadoUsuarios from "@/components/ListadoUsuarios";
import ModalAgregarUsuario from "@/components/ModalAgregarUsuario";
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

    const [usuario, setUsuario] = useState({})

    const soportes =  async () => {
      var res = await fetch("/api/listadoUsuarios", {
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
      setUsuario(res);
  
    }

    useEffect(() => {
      ValidarSesion();
      soportes();
    }, []);


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
                <ListadoUsuarios usuarios={usuario} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
