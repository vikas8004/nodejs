const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  //   console.log(req);
  const obj = {
    name: "akhilesh",
    age: 20,
  };
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.end("hello from the sever");
  //sending the json response
  //   res.end(JSON.stringify(obj));

  // sending html response
  let html = "<h1>Hello world</h1>";
  res.writeHead(200, { "Content-Type": "text/html" });
  //reading the html file
    let htmlfile=fs.readFileSync("../data/index.html","utf-8")
  //   res.end(htmlfile);

  // other way to do the same is
//   const readfileStream = fs.createReadStream("../data/index.html");
//   readfileStream.pipe(res);
  //this way is more performant
  htmlfile=htmlfile.replace("{{name}}",obj.name)
  res.end(htmlfile)
});

server.listen(3001, () => {
  console.log("app is running on port number 3001");
});
