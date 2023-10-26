import {NextResponse} from "next/server"
import {pool} from "@/db"

export async function GET() {
  const conn = await pool.getConnection();
  try {
    const rows = await conn.query('SELECT * FROM usuarios');
    console.log(rows)
    return new NextResponse(JSON.stringify(rows));
  } catch (err) {
    return new NextResponse(JSON.stringify({ error: err.message }));
  } finally {
    conn.end();
  }
 
}

export async function POST(request) {
  const conn = await pool.getConnection();
  const data = await request.json()
  const datos = [data.username, data.password]
  try {
    const rows = await conn.query('INSERT INTO usuarios (username, paswword) VALUES (?,?)', datos);
    console.log(rows)
    return new NextResponse(JSON.stringify(rows));
  } catch (err) {
    return new NextResponse(JSON.stringify({ error: err.message }));
  } finally {
    conn.end();
  }
}
