import {NextResponse} from "next/server"
import {pool} from "@/db"

export async function POST(request) {
  const conn = await pool.getConnection();
  const data = await request.json()
  const datos = [data.nombre, data.programa, data.materia, data.salon, data.horaIni, data.horaFini, data.herramientas, data.observaciones]
  console.log(datos)
  try {
    const rows = await conn.query('INSERT INTO clases (responsables, programa, materia, salon, horai, horaf, programas, observaciones) VALUES (?, ?, ?, ?, ?, ?, ?, ?);', datos);
    return new NextResponse(JSON.stringify(rows));
  } catch (err) {
    return new NextResponse(JSON.stringify({ error: err.message }));
  } finally {
    conn.end();
  }
}
