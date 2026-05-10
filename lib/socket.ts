import { Server as IOServer } from "socket.io";

declare global {
  // eslint-disable-next-line no-var
  var __socket_io_server__: IOServer | undefined;
}

export function initSocket(server: any) {
  if (!global.__socket_io_server__) {
    const io = new IOServer(server, {
      path: "/api/socket",
      cors: {
        origin: "*",
      },
    });

    io.on("connection", (socket) => {
      console.log("Socket.IO connected:", socket.id);
      socket.on("disconnect", () => {
        console.log("Socket.IO disconnected:", socket.id);
      });
    });

    global.__socket_io_server__ = io;
  }

  return global.__socket_io_server__;
}

export function emitAgentUpdate(data: unknown) {
  if (global.__socket_io_server__) {
    global.__socket_io_server__.emit("agent-update", data);
  } else {
    console.warn("Socket.IO server is not initialized yet.");
  }
}
