"use client";

import { useEffect, useState } from "react";
import ListadoClaseDetalle from "./ListadoClaseDetalle";
import { useSession } from "@/hooks/useSession";
import { useRouter } from "next/navigation";

function listadoClases ({clases}) {

    const { useSessionUser } = useSession();
    const router = useRouter();

    useEffect(() => {

        if(useSessionUser() === false){
          router.push("/");
        }
          
      }, []);

    //console.log(clases);
    const date = Date.now();
    const hoy =  new Date(date);
    //console.log(hoy.toLocaleDateString());



    return (
        <>
        {clases.map((clase,index) => (
            
            <tr key={clase.id}>
            <th scope="row">{index+1}</th>
            <th scope="row">{clase.fecha}</th>
            <td> {clase.horai}</td>
            <td> {clase.horaf}</td>
            <td  >{clase.salon}</td>
            <td >{clase.responsable}</td>
            <td >{clase.materia}</td>
            <td>
      
            <ListadoClaseDetalle id={clase.id} docente={clase.responsable} programa={clase.programa} materia={clase.materia} salon={clase.salon} horai={clase.horai} horaf={clase.horaf} programas={clase.programas} observaciones={clase.observaciones} />
      
            </td>
            </tr>
        ))}
        </>
        
    )
}

export default listadoClases