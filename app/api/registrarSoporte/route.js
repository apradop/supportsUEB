import {NextResponse} from "next/server"
import {pool} from "@/db"

export async function POST(request) {
  const conn = await pool.getConnection();
  const data = await request.json()
  const datos = [data.nombreTec, data.usuario , data.nombre, data.programa, data.materia, data.salon, data.fecha , data.horaIni, data.horaFini, data.estado, data.observaciones, data.actividad, data.actividadadi]
  //console.log(datos)
  try {
    const rows = await conn.query('INSERT INTO soporte (tecnico, usuario, responsable, programa, materia, salon, fecha , horai, horaf,estado, observaciones, actividad, actividadad) VALUES (?,?,?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?);', datos);
    //console.log(rows)
    return new NextResponse(JSON.stringify(rows));
  } catch (err) {
    //console.log(err)
    return new NextResponse(JSON.stringify({ error: err.message }));
  } finally {
    conn.end();
  }
}
