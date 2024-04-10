const fs = require("fs");
const readStream = fs.createReadStream("../data/write.txt", {
  highWaterMark: 10,
  //set the size of chunks in bytes
  encoding: "utf-8",
});

const writeStream = fs.createWriteStream("../data/write2.txt");

// it internally use event emmiter class

readStream.on("data", (chunk) => {
  console.log(chunk.length);
  writeStream.write(chunk);
});
