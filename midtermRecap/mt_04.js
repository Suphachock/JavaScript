function total_volume() {
  let sum;
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum = arguments[i].reduce((partialSum, a) => partialSum * a, 1);
    total += sum;
  }
  return total;
}
console.log(total_volume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
console.log(total_volume([2, 2, 2], [2, 1, 1]));
console.log(total_volume([1, 1, 1]));
