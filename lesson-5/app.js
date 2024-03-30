// Let's go express.JS

const express = require("express");
const path = require("path");

const app = express();

const port = 3000;

const hostname = "127.0.0.1";

//MIDDLEWARE USEING HELP USE METHOD
/* app.use("/test", (req, res, next) => {
  console.log("Yes");

  next();
}); */

app.use("/", express.static("public/images"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, `index.html`));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, `about.html`));
});

/* app.get("/test", (req, res) => {
  res.send("This is only test");
}); */

/* app.get("/user/:usersID/book/:bookName", (req, res) => {
  res.send(`<h3>Kullanici adi : ${req.params.usersID}</h3>
   <p>Book name : ${req.params.bookName}</p>
   `);
}); */

app.listen(port, hostname, () => {
  console.log(`http://${hostname}:${port}`);
});
