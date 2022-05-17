function numInStr(arr) {
  let x = [];
  for (const key in arr) {
    if (arr[key].includes(0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9)) {
      x.push(arr[key]);
    }
  }
  return x;
}

console.log(numInStr(["abc", "abc10"]));
console.log(numInStr(["this is a test", "test1"]));
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
console.log(numInStr(["1a", "a", "2b", "b"]));
