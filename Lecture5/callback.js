function callback() {
  console.log("Timeout Complete");
}
console.log("Start");
setTimeout(callback, 3000);
console.log("End");
