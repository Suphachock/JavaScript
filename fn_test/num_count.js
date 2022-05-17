function countNum(str) {
  let x = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] > 0) x += 1;
  }
  return x;
}
console.log(countNum("123a57"));
console.log(countNum("ba45n7"));
console.log(countNum("javascript"));
