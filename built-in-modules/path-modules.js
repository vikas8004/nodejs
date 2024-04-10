const path = require("path");
// console.log(__filename);
// console.log(__dirname);
// console.log(path.extname(__filename));
// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))//returns the last portion of the string path
// console.log(path.extname(__dirname));
// console.log(path.extname(__filename));
//extname only returns extension of the file including.

// console.log(path.parse(__dirname));
// console.log(path.parse(__filename));
// the above code shows a object representation of the path.

// console.log(path.format({root:"/d:",dir:"D://am/v/a",ext:".js",name:"hello",base:"hello.js"}));//returns the formatted path from path object

// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute("./data/index.js"));

// console.log(path.isAbsolute("d:\\vikas\inde.htm"));

// PATH
// console.log(path.join("folder1", "folder2", "index.html"));
// console.log(path.join("/folder1", "//folder2", "index.html")); //it normalizes too. as we can see in the above code to normalizing the // slash.

// console.log(path.join(__dirname, "adarsh.index"));
// console.log(path.join(__filename, "data.json"));

// console.log(path.join("/folder1","/folder2","../folder3","data.json"));

// RESOLVE
//converts in absolute path
// console.log(path.resolve("folder1", "folder2", "data.json"));

// console.log(path.resolve("/folder", "folder2", "folder3", "indexh.tml"));

// console.log(path.resolve("/folder1", "/folder2", "index.htm"));
// console.log(path.resolve("/folder1", "/folder2", "../index.htm"));//lastly where it founds / consider starting absolute path from there.




