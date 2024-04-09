"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function ListadoUsuariosDetalle({ id, nombre, rol}) {

  const [id1, setId] = useState(id);
  const [nombre1, setNombre] = useState(nombre);
  const [rol1, setRol] = useState(rol);

  useEffect(() => {
    setId(id);
    setNombre(nombre);
    setRol(rol)
  }, [])

  async function eliminar(id) {
    const res = await fetch('/api/eliminarUsuario', {
    method: "POST",
    body: JSON.stringify({id}),
    headers: {
      "Content-Type": "application/json",
    }
  });

  window.location.reload();

  }

  return (

    <div className="justify-content-md-end">
        <button
        type="button"
        className="btn btn-primay"
        onClick={() => eliminar(id)}
        >
            Eliminar
        </button>
    </div>

  );
}

export default ListadoUsuariosDetalle;
