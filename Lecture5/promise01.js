function promiseTimeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}
console.log("Start");
promiseTimeout(3000)
  .then(() => {
    console.log("Done!");
  })
  .catch(() => {
    console.log("Error");
  });
console.log("End");
