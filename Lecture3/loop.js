const names = ["Justin", "Sarah", "Christopher"];

//while loop
console.log("\n--------While Loop--------")
let index = 0;
while (index < names.length) {
  const name = names[index];
  console.log(name);
  index++;
}

//for loop
console.log("\--------For Loop--------")
for (let index = 0; index < names.length; index++) {
  const name = names[index];
  console.log(name);
}

//for of
console.log("\--------For Of Loop--------")
for (let name of names) {
  console.log(name);
}
