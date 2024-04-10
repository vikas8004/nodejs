// const buffer = new Buffer.from("Srivastava");
const buffer = new Buffer.alloc(20); //allocates that much character's space
buffer.write("Sri");
console.log(buffer); //show the hexadecimal code of every character.

console.log(buffer.toString());
console.log(buffer.toJSON());

// ek baar aapne jo buffer bana diya uska space fixed ho jaata hai you.
