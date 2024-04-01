import { NextResponse } from "next/server";
import { pool } from "@/db";

export async function GET() {
  const conn = await pool.getConnection();
  try {

    const rows = await conn.query(
      `UPDATE clases SET estado = 'finalizada' , horaFinalReal = '${horaIniReal}' WHERE id = "${data.id}"`
    );
    //console.log(rows);

    
    return new NextResponse(JSON.stringify(rows));
  } catch (err) {
    return new NextResponse(JSON.stringify({ error: err.message }));
  } finally {
    conn.end();
  }
}

export async function POST(request) {
  const conn = await pool.getConnection();
  const data = await request.json();

  try {
    const date = Date.now();
    const hoy =  new Date(date);
    const hora = hoy.getTime();
    const resutl = new Date(hora);
    console.log(data.horaIniReal);
    const horaIniReal = (hoy.getMonth() + 1) + "/" + hoy.getDate() + "/"  + hoy.getFullYear() +" " +data.horaIniReal;
    console.log(horaIniReal);
    const dura = new Date(horaIniReal);
    console.log(dura.getTime());
    console.log(hoy.getTime());
    console.log((hoy.getTime() - dura.getTime()) );
    const duracion = (hoy.getTime() - dura.getTime()) / (1000*60);
    console.log(duracion);
    let horaFinalReal= "";

    if (resutl.getHours() < 10) {
      horaFinalReal += "0" + resutl.getHours() + ":";
    }else{  
      horaFinalReal += resutl.getHours() + ":";
    }
    
    if (resutl.getMinutes() < 10) {
      horaFinalReal += "0" + resutl.getMinutes();
    }else{
      horaFinalReal += resutl.getMinutes();
    }

    const rows = await conn.query(
      `UPDATE clases SET estado = 'finalizada' , horaFinalReal = '${horaFinalReal}', duracion = '${duracion}' WHERE id = "${data.id}"`
    );

    console.log(horaFinalReal);

    //console.log(rows);

    
    return new NextResponse(JSON.stringify(rows));
  } catch (err) {
    return new NextResponse(JSON.stringify({ error: err.message }));
  } finally {
    conn.end();
  }
}




