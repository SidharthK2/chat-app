const express = require("express");
const app = express();
const server = require("http").createServer(app);
const { Server } = require("socket.io");
const port = process.env.PORT || 5000;
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

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
