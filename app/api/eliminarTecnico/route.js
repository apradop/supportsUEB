import { NextResponse } from "next/server";
import { pool } from "@/db";

export async function POST(request) {
    const data = await request.json();
    const conn = await pool.getConnection();
    console.log(data.id);
    try {
  
      const rows = await conn.query(
        `DELETE FROM tecnicos WHERE id = '${data.id}'`
      );
      //console.log(rows);
  
      
      return new NextResponse(JSON.stringify(rows));
    } catch (err) {
      return new NextResponse(JSON.stringify({ error: err.message }));
    } finally {
      conn.end();
    }
  }