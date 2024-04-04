import { log } from "console";
import express from "express";

import { engine } from "express-handlebars";

const app = express();

const port = 3000;

const hostname = "127.0.0.1";

app.engine("handlebars", engine());

app.set("view engine", "handlebars");

app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("site/index");
});

app.get("/about", (req, res) => {
  res.render("site/about");
});

app.listen(port, hostname, () => {
  console.log(`http://${hostname}:${port}`);
});
