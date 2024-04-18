"use client";

import ListadoTecnicosDetalle from "./ListadoTecnicosDetalle";
import { useEffect, useState } from "react";

function ListadoTecnicos({ tecnicos }) {
  const [tecnico, setTecnico] = useState({});
  const [bool, setBool] = useState(true);

  useEffect(() => {
    if (
      tecnicos !== undefined &&
      tecnicos !== null &&
      Object.keys(tecnicos).length > 0
    ) {
      setTecnico(tecnicos);
      setBool(false);
    } else {
      setTecnico({});
      setBool(true);
    }
  }, [tecnicos]);

  return (
    <>
      {bool ? (
        <></>
      ) : (
        <>
          {tecnico.map((tecnico, index) => (
            <tr key={tecnico.id}>
              <th scope="row">{index + 1}</th>
              <td>{tecnico.tecnico}</td>
              <td>
                <ListadoTecnicosDetalle
                  id={tecnico.id}
                  nombre={tecnico.username}
                />
              </td>
            </tr>
          ))}
        </>
      )}
    </>
  );
}

export default ListadoTecnicos;
