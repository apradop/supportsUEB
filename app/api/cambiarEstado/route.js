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
    let horaIniReal= "";

    if (resutl.getHours() < 10) {
      horaIniReal += "0" + resutl.getHours() + ":";
    }else{  
      horaIniReal += resutl.getHours() + ":";
    }
    
    if (resutl.getMinutes() < 10) {
      horaIniReal += "0" + resutl.getMinutes() + ":";
    }else{
      horaIniReal += resutl.getMinutes();
    }

    console.log(horaIniReal);
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