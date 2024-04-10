// const name = require("./localMod.js");
// const multiply =require("./localMod.js")

// let total = name.sum(3, 8);
// console.log(total,name.multiply());
// console.log(name());

// require("./mod1")
// require("./mod2")
// require("./iife")
// console.log(name)

// const superHero = require("./class");
// console.log(superHero.getName());
// console.log(superHero.setName("akhilesh"));

// const superHero1 = require("./class");
// console.log(superHero1.getName());
//int the same module the the valued of the name is cached so when we import the the superhero instance it would come up with previous value.
const {add}=require("./localMod")
console.log(add());