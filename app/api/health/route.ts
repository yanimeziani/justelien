import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "justelien",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
}
