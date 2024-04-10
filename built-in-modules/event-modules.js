const emitter = require("events");
const event = new emitter();

event.on("ev", (vikas) => {
  console.log(`hello ${vikas} event is being listned`);
});
event.on("ev", () => {
  console.log("event is being listened again");
});

event.emit("ev", "akhilesh");
