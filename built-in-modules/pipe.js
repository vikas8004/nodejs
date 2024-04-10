const fs = require("fs");
/*
In Node.js, piping is a mechanism used to connect the output of one stream to the input of another. It allows you to efficiently transfer data from a readable stream to a writable stream, without manually managing the flow of data.

Piping is achieved using the pipe() method available on readable streams. This method takes a writable stream as its argument and sets up the piping between the two streams. When you pipe a readable stream to a writable stream, data from the readable stream is automatically sent to the writable stream, and you don't need to manually handle data events or write data to the destination stream.
*/
const readableStream = fs.createReadStream("../data/data.json", {
  highWaterMark: 4,
});
const writableStream = fs.createWriteStream("../data/write3.txt");

readableStream.pipe(writableStream);

// some events
writableStream.on("finish", () => {
  console.log("finished transferring");
});
