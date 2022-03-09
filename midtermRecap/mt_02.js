function highest_digit(num) {
  let char = num.toString().split('');
  let max=0;
  for(let i=0;i<char.length;i++) {
    if(char[i]>max)max=char[i];
  }
  return max;
}
console.log(highest_digit(379));
console.log(highest_digit(2));
console.log(highest_digit(377401));