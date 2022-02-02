let furniture = ["Table", "Chairs", "Couch"];
for (var i = 0; i < 3; i++) {
  console.log(furniture[i]);
  for (var str of furniture[i]) {
    console.log(str);
  }
}
