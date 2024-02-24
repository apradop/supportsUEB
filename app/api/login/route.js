import { NextResponse } from "next/server";
import { pool } from "@/db";

export async function POST(request) {
  let boolean = false;
  const conn = await pool.getConnection();
  const data = await request.json();

  console.log(data);
  try {
    const rows = await conn.query(
      `SELECT * FROM usuarios WHERE username="${data.username}"AND password="${data.password}"`
    );
    console.log(rows);
    if (rows.length != 0) {
      boolean = true;
    }
    return new NextResponse(JSON.stringify({ boolean , rows }));
  } catch (err) {
    return new NextResponse(JSON.stringify({ error: err.message }));
  } finally {
    conn.end();
  }
}
