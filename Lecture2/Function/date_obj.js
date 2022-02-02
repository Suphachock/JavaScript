const start = Date.now();
console.log("start timer");

setTimeout(() => {
  const millis = Date.now() - start;
  console.log(`Second elased = ${Math.floor(millis / 1000)}`);
}, 2000);
