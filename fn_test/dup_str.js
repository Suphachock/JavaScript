function returnDupStr(arr) {
  let num = arr;
  let x = [];
  for (let i = 0; i < num.length; i++) {
    if (!num[i].includes(0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9)) {
      x.push(num[i]);
    }
  }
  let result = [...new Set(x)];
  return result;
}

console.log(returnDupStr(["abcx", "abcx", "7890", "7890"]));
console.log(returnDupStr(["abc", "a1c", "a1c", "bcd", "bcd"]));
console.log(returnDupStr(["a test", "test1", "test"]));
console.log(returnDupStr(["1ac", "ab", "1a", "ab"]));
