import { NextRequest, NextResponse } from "next/server";
import { initSocket, emitAgentUpdate } from "@/lib/socket";

export const runtime = "node";

export async function GET(req: NextRequest) {
  const socketServer = (req as any).socket?.server;
  const io = socketServer ? initSocket(socketServer) : null;

  return NextResponse.json({
    message: io ? "Socket route initialized" : "Socket initialization failed",
  });
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  emitAgentUpdate(data);

  return NextResponse.json({
    received: data,
    success: true,
  });
}
