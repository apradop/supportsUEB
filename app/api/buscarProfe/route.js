import { NextResponse } from "next/server";

export async function POST(request) {
    let boolean = false;
    const data = await request.json();
    let datos = "";
    try {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("Content-Length", "104");
        
        var urlencoded = new URLSearchParams();
        urlencoded.append("actionID", "consultardatos");
        urlencoded.append("Fecha_ini", "2023-10-24");
        urlencoded.append("Fecha_Fin", "2023-10-30");
        urlencoded.append("Num_Docente", "");
        urlencoded.append("Num_Estudiante", "1010080012");
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        };
        
        const res = await fetch("https://artemisa.unbosque.edu.co/serviciosacademicos/EspacioFisico/Interfas/funcionesEspaciosFisicosAsigandosReporte.php", requestOptions)
        const data = await res.text()
        console.log(data)
      return new NextResponse(data);
    } catch (err) {
      return new NextResponse(JSON.stringify({ error: err.message }));
    } finally {
    }
  }
  