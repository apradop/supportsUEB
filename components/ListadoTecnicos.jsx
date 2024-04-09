"use client";

import ListadoTecnicosDetalle from "./ListadoTecnicosDetalle";

function ListadoTecnicos({ tecnicos }) {


  return(
    <>
    {tecnicos.map((tecnico,index) => (

      <tr key={tecnico.id}>
        <th scope="row">{index+1}</th>
        <td>{tecnico.tecnico}</td>
        <td>
          <ListadoTecnicosDetalle id={tecnico.id} nombre={tecnico.username} />
        </td>
      </tr>
    ))}
    </>

  );
}

export default ListadoTecnicos;
