"use client";

import { useEffect, useState } from "react";

function listadoClases ({clases}) {

    console.log(clases);

    return (
        <>
        {clases.map((clase) => (
            
            <tr key={clase.id}>
            <th scope="row">{clase.id}</th>
            <th scope="row">15/11/2023</th>
            <td> {clase.horai}</td>
            <td> {clase.horaf}</td>
            <td  >{clase.salon}</td>
            <td >{clase.responsable}</td>
            <td >{clase.materia}</td>
            <td>
      
            <button type="button" className="btn btn-primary">Información</button>
      
            <button type="button" className="btn btn-success">Finalizar</button>
      
            </td>
            </tr>
        ))}
        </>
        
    )
}

export default listadoClases