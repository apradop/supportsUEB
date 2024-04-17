"use client";

import { useEffect, useState } from "react";
import ListadoClaseDetalle from "./ListadoClaseDetalle";
import { useSession } from "@/hooks/useSession";
import { useRouter } from "next/navigation";

function ListadoClases({ clases }) {
  const [clas, setClases] = useState(clases);
  const { useSessionUser } = useSession();

  console.log("entroooooooooooooooooo");
  console.log(clas);

  var clase = setInterval(() => {
    verificarClases(clas, clase);
  }, 120000);
  //console.log(clases);

  function verificarClases(clases, cls) {
    try {
      if (clases.length != 0) {
        clases.map((clase) => {
          const date = Date.now();
          const hoy = new Date(date);
          console.log(clase.horaf);
          const hora =
            hoy.getMonth() +
            1 +
            "/" +
            hoy.getDate() +
            "/" +
            hoy.getFullYear() +
            " " +
            clase.horaf;
          console.log(hora);
          const horaf = new Date(hora);
          console.log(horaf.getTime());
          console.log(hoy.getTime());
          if (horaf.getTime() <= hoy.getTime()) {
            console.log("entro");
            const res = fetch("http://localhost:3000/api/cambiarEstado", {
              method: "POST",
              body: JSON.stringify({
                id: clase.id,
                horaIniReal: clase.horaIniReal,
                horaf: clase.horaf,
                terminar: "no",
              }),
              headers: {
                "Content-Type": "application/json",
              },
              cache: "no-cache",
              mode: "cors",
            });
          }
        });
        setTimeout(() => {
          if (typeof window !== "undefined") {
            window.location.reload();
          }
        }, 100);
      } else {
        console.log("no entro");
        console.log(clas);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const router = useRouter();

  function ValidarSesion() {
    if (useSessionUser() === false) {
      router.push("/");
    }
  }

  useEffect(() => {
    ValidarSesion();
  }, []);

  //console.log(clases);
  const date = Date.now();
  const hoy = new Date(date);
  //console.log(hoy.toLocaleDateString());

  return (
    <>
      {clas.map((clase, index) => (
        <tr key={clase.id}>
          <th scope="row">{index + 1}</th>
          <th scope="row">{clase.fecha}</th>
          <td> {clase.horai}</td>
          <td> {clase.horaf}</td>
          <td>{clase.salon}</td>
          <td>{clase.responsable}</td>
          <td>{clase.materia}</td>
          <td>
            <ListadoClaseDetalle
              horaIniReal={clase.horaIniReal}
              id={clase.id}
              docente={clase.responsable}
              programa={clase.programa}
              materia={clase.materia}
              salon={clase.salon}
              horai={clase.horai}
              horaf={clase.horaf}
              programas={clase.programas}
              observaciones={clase.observaciones}
            />
          </td>
        </tr>
      ))}
    </>
  );
}

export default ListadoClases;
