import { NextResponse } from "next/server";
import { pool } from "@/db";

export async function GET() {
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
  }
}