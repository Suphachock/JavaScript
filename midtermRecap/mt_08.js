function simplePair() {
  let result = [];
  let number = arguments[0];
  for (let i = 0; i < number.length; i++) {
    for (let j = 0; j < i; j++) {
      if (number[i] * number[j] == arguments[1]) {
        result.push(number[i], number[j]);
      }
    }
  }
  if (result.length == 0) return "null";
  return result;
}

console.log(simplePair([1, 2, 3], 3));
console.log(simplePair([1, 2, 3], 6));
console.log(simplePair([1, 2, 3], 9));