"use client";


function listadoSoporte ({soportes}) {

    //console.log(hoy.toLocaleDateString());



    return (
        <>
        {soportes.map((soporte,index) => (
            
            <tr key={soporte.id}>
            <th scope="row">{index+1}</th>
            <th scope="row">{soporte.fecha}</th>
            <td> {soporte.horai}</td>
            <td> {soporte.horaf}</td>
            <td  >{soporte.salon}</td>
            <td >{soporte.responsable}</td>
            <td >{soporte.materia}</td>
            </tr>
        ))}
        </>
        
    )
}

export default listadoSoporte