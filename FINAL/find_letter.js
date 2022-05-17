function missingLetter(str) {
  let x = "";

  for (const key in str) {
    let inc = parseInt(key, 10) + 1;
    if (inc == str.length) inc = str.length - 1;
    let num = str.charCodeAt(inc) - str.charCodeAt(key);
    if (num == 2) {
      x = setChar(str.charCodeAt(inc) - 1);
    }
  }
  if (x.length != 0) return x;
  return "No Missing Letter";
}

console.log(missingLetter("abdefg"));
console.log(missingLetter("mnopqs"));
console.log(missingLetter("tuvxyz"));
console.log(missingLetter("abcdefg"));
function setChar(code) {
  if (code == 97) return "a";
  else if (code == 98) return "b";
  else if (code == 99) return "c";
  else if (code == 100) return "d";
  else if (code == 101) return "e";
  else if (code == 102) return "f";
  else if (code == 103) return "g";
  else if (code == 104) return "h";
  else if (code == 105) return "i";
  else if (code == 106) return "j";
  else if (code == 107) return "k";
  else if (code == 108) return "l";
  else if (code == 109) return "m";
  else if (code == 110) return "n";
  else if (code == 111) return "o";
  else if (code == 112) return "p";
  else if (code == 113) return "q";
  else if (code == 114) return "r";
  else if (code == 115) return "s";
  else if (code == 116) return "t";
  else if (code == 117) return "u";
  else if (code == 118) return "v";
  else if (code == 119) return "w";
  else if (code == 120) return "x";
  else if (code == 121) return "y";
  else if (code == 122) return "z";
}
