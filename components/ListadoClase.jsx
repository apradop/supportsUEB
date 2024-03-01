"use client";

import { useEffect, useState } from "react";
import ListadoClaseDetalle from "./ListadoClaseDetalle";

function listadoClases ({clases}) {

    //console.log(clases);



    return (
        <>
        {clases.map((clase,index) => (
            
            <tr key={clase.id}>
            <th scope="row">{index+1}</th>
            <th scope="row">15/11/2023</th>
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