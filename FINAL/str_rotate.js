function rightRotations(str) {
  box = [];
  for (i = 0; i < str.length; i++) {
    box[i] = str;
    r = str[str.length - 1];
    str = str.slice(0, str.length - 1);
    str = r + str;
  }
  return box;
}

console.log(rightRotations("abc"));
console.log(rightRotations("abcdef"));
