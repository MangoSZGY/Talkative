const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
// Növeljük a limitet, hogy nagyobb képek is átférjenek (max 10MB)
const io = new Server(server, {
  maxHttpBufferSize: 1e7
});

const PORT = 5000;

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("Csatlakozott:", socket.id);

  socket.on("join", (room) => {
    socket.join(room);
  });

  // ÜZENET ÉS KÉP KÜLDÉSE
  socket.on("message", (data) => {
    io.to(data.room).emit("message", { 
        from: socket.id, 
        text: data.text,   // Szöveg (ha van)
        image: data.image, // Kép (ha van)
        user: data.user,   // Küldő neve
        room: data.room 
    });
  });

  // Gépelés jelzése
  socket.on("typing", (data) => {
    socket.to(data.room).emit("typing", { 
        from: socket.id, 
        isTyping: data.isTyping,
        room: data.room
    });
  });

  // WebRTC
  socket.on("offer", (d) => socket.to(d.room).emit("offer", { from: socket.id, offer: d.offer }));
  socket.on("answer", (d) => io.to(d.to).emit("answer", { from: socket.id, answer: d.answer }));
  socket.on("ice-candidate", (d) => socket.to(d.room).emit("ice-candidate", { from: socket.id, candidate: d.candidate }));
});

server.listen(PORT, () => {
  console.log(`>>> KÉPKÜLDŐS SZERVER FUT: http://localhost:${PORT}`);
});