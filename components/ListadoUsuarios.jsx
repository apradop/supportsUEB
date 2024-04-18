"use client";

import ListadoUsuariosDetalle from "./ListadoUsuariosDetalle";
import { useEffect, useState } from "react";

function ListadoUsuarios({ usuarios }) {

  const [user, setUser] = useState({});
  const [bool, setBool] = useState(true);

  useEffect(() => {
    if (
      usuarios !== undefined &&
      usuarios !== null &&
      Object.keys(usuarios).length > 0
    ) {
      setUser(usuarios);
      setBool(false);
    } else {
      setUser({});
      setBool(true);
    }
  }, [usuarios]);


  return(
    <>
    {bool ? (
      <>
      </>
    ) : (
      <>
    {user.map((usuario,index) => (

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
  )
}
</>
);
}
export default ListadoUsuarios;
