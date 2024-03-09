import { NextResponse } from "next/server";
import { pool } from "@/db";

export async function GET() {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(
      `SELECT * FROM clases WHERE estado = 'activa'`
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

export async function POST(request) {
  const conn = await pool.getConnection();
  try {
    const rows = await conn.query(
      `SELECT * FROM clases WHERE estado = 'activa'`
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