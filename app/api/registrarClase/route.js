import { NextResponse } from "next/server";
import { pool } from "@/db";

export async function POST(request) {
  try {
    const conn = await pool.getConnection();
    const data = await request.json();
    const datos = [
      data.nombre,
      data.programa,
      data.materia,
      data.salon,
      data.fecha,
      data.horaIni,
      data.horaFini,
      data.horaIniReal,
      data.herramientas,
      data.observaciones,
    ];
    //console.log(datos);
    const rows = await conn.query(
      "INSERT INTO clases (responsable, programa, materia, salon, fecha , horai, horaf, horaIniReal, programas, observaciones) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
      datos
    );
    //console.log(rows);
    conn.end();
    return new NextResponse(JSON.stringify(rows));
  } catch (err) {
    //console.log(err);
    return new NextResponse(JSON.stringify({ error: err.message }));
  }
}
