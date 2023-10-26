import { NextResponse } from "next/server";
import { pool } from "@/db";

export async function POST(request) {
  let boolean = false;
  const conn = await pool.getConnection();
  const data = await request.json();
  try {
    const rows = await conn.query(
      `SELECT * FROM usuarios WHERE username="${data.username}"AND paswword="${data.password}"`
    );
    console.log(rows);
    if (rows.length != 0) {
      boolean = true;
    }
    return new NextResponse(boolean);
  } catch (err) {
    return new NextResponse(JSON.stringify({ error: err.message }));
  } finally {
    conn.end();
  }
}
