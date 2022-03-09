function capToFront(text) {
  let word = text.split("");
  let upper = []
  let lower = []
  for(let i=0;i<word.length;i++) {
    if(word[i] == word[i].toUpperCase())upper.push(word[i])
    if(word[i] == word[i].toLowerCase())lower.push(word[i])
  }
  let result = upper.concat(lower)
  return result.join("")
}
console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));

