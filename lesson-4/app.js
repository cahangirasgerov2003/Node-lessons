const http = require("node:http");

const fs = require("fs");

const port = "3000";

const hostname = "127.0.0.1";

const indexPage = fs.readFileSync("index.html");
const aboutPage = fs.readFileSync("about.html");
const error = fs.readFileSync("error.html");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(indexPage);
  } else if (req.url === "/about") {
    res.end(aboutPage);
  } else {
    res.statusCode = 404;
    res.end(error);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server http://${hostname}:${port} calisiyor`);
});
