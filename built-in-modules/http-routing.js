const http = require("http");

const server = http.createServer((req, res) => {
  //   res.end(req.url);
  if (req.url === "/") {
    res.end("home page");
  } else if (req.url === "/about") {
    res.end("About page");
  } else if (req.url === "/api") {
    
    res.end(JSON.stringify({ name: "akhiles kasaudhan", stream: "BCA" }));
  } else {
    res.end("404 not found");
  }
});

server.listen(3001, () => {
  console.log("server started at port number 3001");
});
