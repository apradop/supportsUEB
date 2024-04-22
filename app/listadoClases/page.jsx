"use client";

import ListadoClases from "@/components/ListadoClase";
import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import { useSession } from "@/hooks/useSession";
import { useRouter } from "next/navigation";

function Page() {
  const { useSessionUser } = useSession();
  const router = useRouter();

  function ValidarSesion() {
    if (useSessionUser() === false) {
      router.push("/");
    }
  }
  const [clase, setClase] = useState({});

  const clases =  async () => {
    const res = await fetch("/api/listadoClases", {
      method: "POST",
      body: JSON.stringify({ mensaje: "mensaje" }),
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      mode: "cors",
    }).then(res => res.json());

    setClase(res);

  }

  useEffect(() => {
    ValidarSesion();
    clases();
  }, []);

  return (
    <>
      <Navigation />
      <div className="container">
        <h1>Listado de Clases</h1>

        <div className="table-responsive">
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
              <ListadoClases clases={clase} />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Page;
