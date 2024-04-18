import { NextResponse } from "next/server";
import { pool } from "@/db";

export async function POST(request) {
  try {
    const conn = await pool.getConnection();
    const data = await request.json();
    const datos = [
      data.programa
    ];
    //console.log(datos);
    const rows = await conn.query(
        "INSERT INTO programas (programa) VALUES (?);",
        datos
    );
    console.log(rows);
    conn.end();
    return new NextResponse(JSON.stringify(rows));
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ error: err.message }));
  }
}
