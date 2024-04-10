const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req);
  const obj = {
    name: "akhilesh",
    age: 20,
  };
  res.writeHead(200, { "Content-Type": "application/json" });
  //   res.end("hello from the sever");
  //sending the json response
  res.end(JSON.stringify(obj));
});

server.listen(3001, () => {
  console.log("app is running on port number 3001");
});
