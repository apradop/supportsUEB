"use client";


function listadoClasesFin ({clases}) {

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
            </tr>
        ))}
        </>
        
    )
}

export default listadoClasesFin