// function sum(a, b) {
//   return a + b;
// }
// module.exports = () => {
//   return 4 * 7;
// };
// module.exports = () => {
//   return 8 + 8;
// }; //the above one is overrided
// module.exports = {
//   sum,
//   multiply
// };

exports.add = () => 4 + 9; //this is alternative of module.exports but should not be used.

// module.exports = multiply; //it will make it default export
