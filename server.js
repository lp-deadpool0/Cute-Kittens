const express = require("express");
const useSocket = require("socket.io");

const app = express();
const rooms = new Map();

app.get("/", (req, res) => {
  res.send('<a href="/users">users</a>');
});
app.get("/users", (req, res) => {
  console.log("LP SERVER users");
  res.json(rooms);
});

app.listen(8888, (err) => {
  if (err) {
    throw Error(err);
  }

  console.log("LP SERVER started ");
});
