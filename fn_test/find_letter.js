function lostLetter(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) != 1) {
      arr.push(String.fromCharCode(str.charCodeAt(i) + 1));
    }
  }
  arr.pop();
  if (arr.length == 0) {
    return "No Missing Letter";
  } else return arr;
}
console.log(lostLetter("abdefgik"));
console.log(lostLetter("mnopqs"));
console.log(lostLetter("suvxyz"));
console.log(lostLetter("ghijklmno"));
