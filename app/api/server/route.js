import {NextResponse} from "next/server"
import {pool} from "@/db"

export async function GET(request) {
  const conn = await pool.getConnection();
  try {
    const rows = await conn.query('SELECT * FROM usuarios');
    return new NextResponse(JSON.stringify(rows));
  } catch (err) {
    return new NextResponse(JSON.stringify({ error: err.message }));
  } finally {
    conn.release();
  }
 

}
