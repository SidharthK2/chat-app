import SocketIO from "socket.io-client";

const socket = SocketIO("https://chat-app-production-1d85.up.railway.app", {
  withCredentials: true,
});

export default socket;
