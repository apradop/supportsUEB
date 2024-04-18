"use client";

import ListadoClasesFin from "@/components/ListadoClaseFin"
import Navigation from "@/components/Navigation";
import { useEffect, useState } from "react";
 
function Page(){

  const [clases, setClases] = useState({})

  useEffect(() => {
    buscarClases();
  }, []);


  const buscarClases = async () => {
    const res = await fetch('/api/listadoClasesFin', {
    method: "POST",
    body: JSON.stringify({"mensaje":"mensaje"}),
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    mode: "cors"
  }).then(res => res.json());
  setClases(res);
  console.log(res);
  }

  
    return (
        <>
        <Navigation />
        <ListadoClasesFin clases = {clases}/>
</>
    )

}

export default Page;