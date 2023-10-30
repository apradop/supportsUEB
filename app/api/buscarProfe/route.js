import { NextResponse } from "next/server";
import { parse } from "html-table-to-json";

export async function POST(request) {
    let boolean = false;
    const data = await request.json();
    const cedula = data.cedula;
    let fulldate = ""
    const dat = `<tr>
    <th>N</th>    
    <th>SedeoCampus</th> 
    <th>Bloque</th> 
    <th>EspacioFisico</th>
    <th>Grupo</th>
    <th>Programa</th>
    <th>Materia</th>
    <th>Estado</th>
    <th>Fecha</th> 
    <th>Dia</th>
    <th>HoraInicial</th>                     
    <th>HoraFinal</th>
    <th>NombreDocente</th>
    </tr>`;

    try {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        
        //console.log(cedula)

        var time = new Date()
        const dia = time.getDate()
        const mes = time.getMonth() + 1
        const ano = time.getFullYear()
        if(mes < 10){

         fulldate = ano + "-0" + mes + "-" + dia;

        }else{

          fulldate = ano + "-" + mes + "-" + dia;

        }

        console.log(fulldate)

        var urlencoded = new URLSearchParams();
        urlencoded.append("actionID", "consultardatos");
        urlencoded.append("Fecha_ini", fulldate);
        urlencoded.append("Fecha_Fin", "2023-10-31");
        urlencoded.append("Num_Docente", cedula);
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        };
        
        const res = await fetch("https://artemisa.unbosque.edu.co/serviciosacademicos/EspacioFisico/Interfas/funcionesEspaciosFisicosAsigandosReporte.php", requestOptions).catch(error => console.log('error', error))
        const data = await res.text()
        const jsonTables = parse("<table>" + dat + data + "</table>")
        console.log(jsonTables.results)
      return new NextResponse(JSON.stringify(jsonTables.results[0]));
    } catch (err) {
      return new NextResponse(JSON.stringify({ error: err.message }));
    } finally {
    }
  }
  