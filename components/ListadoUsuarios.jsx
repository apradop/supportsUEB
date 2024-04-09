"use client";

import ListadoUsuariosDetalle from "./ListadoUsuariosDetalle";

function ListadoUsuarios({ usuarios }) {


  return(
    <>
    {usuarios.map((usuario,index) => (

      <tr key={usuario.id}>
        <th scope="row">{index+1}</th>
        <td>{usuario.username}</td>
        <td>{usuario.rol}</td>
        <td>
          <ListadoUsuariosDetalle id={usuario.id} nombre={usuario.username} rol={usuario.rol}/>
        </td>
      </tr>
    ))}
    </>

  );
}

export default ListadoUsuarios;
