"use client";
import ListadoSoporte from "@/components/ListadoSoporte";
import Navigation from "@/components/Navigation";
import React, { useState, useEffect} from 'react';
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

    const [soporte, setSoporte] = useState({})


  const soportes =  async () => {
    const res = await fetch("/api/listadoSoportes", {
      method: "POST",
      body: JSON.stringify({ mensaje: "mensaje" }),
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      mode: "cors",
    }).then(res => res.json());

    setSoporte(res);

  }

  useEffect(() => {
    ValidarSesion();
    soportes();
  }, []);

  return (
    <>
      <Navigation />
      <ListadoSoporte soportes={soporte} />
    </>
  );
}

export default Page;
