function total_volume() {
  let arr=[]
  for (let i = 0; i <arguments.length;i++){
    arr[i]=arguments[i]
  }
  return arr
}
console.log(total_volume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
console.log(total_volume([2, 2, 2], [2, 1, 1]));
console.log(total_volume([1, 1, 1]));
