import { NextResponse } from "next/server";
import { pool } from "@/db";

export async function GET() {
  const conn = await pool.getConnection();
  try {
    const rows = await conn.query(
      `UPDATE clases SET estado = 'finalizada' WHERE id = "${data.id}"`
    );
    //console.log(rows);

    
    return new NextResponse(JSON.stringify(rows));
  } catch (err) {
    return new NextResponse(JSON.stringify({ error: err.message }));
  } finally {
    conn.end();
    conn.close();
    conn.destroy();
  }
}

export async function POST(request) {
  const conn = await pool.getConnection();
  const data = await request.json();
  try {
    const rows = await conn.query(
      `UPDATE clases SET estado = 'finalizada' WHERE id ="${data.id}"`
    );
    //console.log(rows);

    
    return new NextResponse(JSON.stringify(rows));
  } catch (err) {
    return new NextResponse(JSON.stringify({ error: err.message }));
  } finally {
    conn.end();
    conn.close();
    conn.destroy()
  }
}