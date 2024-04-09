"use cliente";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function ListadoTecnicosDetalle({ id, nombre}) {

  const [id1, setId] = useState(id);
  const [nombre1, setNombre] = useState(nombre);
  
  useEffect(() => {
    setId(id);
    setNombre(nombre);
  }, [])

  async function eliminar(id) {
    const res = await fetch('/api/eliminarTecnico', {
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

export default ListadoTecnicosDetalle;
