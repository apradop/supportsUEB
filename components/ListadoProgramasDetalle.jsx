"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function ListadoProgramasDetalle({ id, programa }) {
  const [id1, setId] = useState(id);
  const [programa1, setPrograma] = useState(programa);

  useEffect(() => {
    setId(id);
    setPrograma(programa);
  }, []);

  async function eliminar(id) {
    const res = await fetch('/api/eliminarProgramas', {
      method: "POST",
      body: JSON.stringify({ id }),
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

export default ListadoProgramasDetalle;
