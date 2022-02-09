function findPerimeter(lenght, width) {
  let result = lenght * 2 + width * 2;
  return result;
}
console.log(findPerimeter(6, 7));
console.log(findPerimeter(20, 10));
console.log(findPerimeter(2, 9));
console.log("--------------------------");

function equation(num) {
  let word = num.split(" ");
  for (i = 0; i < Object.keys(word).length; i++) {
    if (word[i] == "zero") word[i] = 0;
    if (word[i] == "one") word[i] = 1;
    if (word[i] == "two") word[i] = 2;
    if (word[i] == "three") word[i] = 3;
    if (word[i] == "four") word[i] = 4;
    if (word[i] == "five") word[i] = 5;
    if (word[i] == "six") word[i] = 6;
    if (word[i] == "seven") word[i] = 7;
    if (word[i] == "eight") word[i] = 8;
    if (word[i] == "nine") word[i] = 9;
  }
  return eval(word.join(""))
}
console.log(equation("one + one"));
console.log(equation("seven * four - two"));
console.log(equation("one + one + one + one + one"));
