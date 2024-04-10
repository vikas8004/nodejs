const fs = require("fs");
// const fileData = fs.readFileSync(".././data/data.json", "utf-8");
// console.log(fileData);
//by default file is read into buffer and if u are specifying the type then it would be converted in that type like utf-8
// fs.readFile(
//   "../data/data.json",
//   {
//     encoding: "utf-8",
//   },
//   (err, data) => {
// if the first parameter of the callback is error then this type of caalback is known as error first callback function.
//     if (err) {
//       console.log(err.message);
//     } else {
//       console.log(data);
//     }
//   }
// );

// WRITING TO THE FILE
fs.writeFileSync(
  "../data/write.txt",
  "hello world ! this is written by the node js"
);

// fs.writeFile("../data/input.txt", "hello vikas", (err) => {
//   // it only takes err as argument
//   if (err) {
//     console.log(err.message);
//   }
// });

fs.writeFile("../data/input.txt", " how are u", { flag: "a" }, (err) => {
  if (err) {
    console.log(err.message);
  }
});
