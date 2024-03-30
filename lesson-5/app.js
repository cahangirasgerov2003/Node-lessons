// Let's go express.JS

const express = require("express");
const path = require("path");

const app = express();

const port = 3000;

const hostname = "127.0.0.1";

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, `index.html`));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, `about.html`));
});

app.get("/user/:usersID/book/:bookName", (req, res) => {
  res.send(`<h3>Kullanici adi : ${req.params.usersID}</h3>
   <p>Book name : ${req.params.bookName}</p>
   `);
});

app.listen(port, hostname, () => {
  console.log(`http://${hostname}:${port}`);
});
