const express = require("express");
const app = express();
const server = require("http").createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("client connected");
  socket.on("message", (data) => {
    io.emit("message", { from: data.from, message: data.message });
  });
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
