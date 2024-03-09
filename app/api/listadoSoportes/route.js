import { NextResponse } from "next/server";
import { pool , imprimir } from "@/db";


export async function POST(request) {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(
      `SELECT * FROM soportes `
    );
  
    imprimir();
    return new NextResponse(JSON.stringify(rows));
  } catch (err) {
    return new NextResponse(JSON.stringify({ error: err.message }));
  } finally {
    conn.end();
    conn.close();
    conn.destroy()
  }
}