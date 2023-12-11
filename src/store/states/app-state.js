import { Socket } from "socket.io-client";

export type AppState = {
    isLoading: boolean;
    socket?: Socket;
  };