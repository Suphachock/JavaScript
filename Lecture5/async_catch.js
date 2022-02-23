function yayOrNay() {
  return new Promise((resolve, reject) => {
    const val = Math.round(Math.random() * 1);
    val ? resolve("LuckY!") : reject("Nope!");
  });
}
async function msg() {
  try {
    const msg = await yayOrNay();
    console.log(msg);
  } catch (err) {
    console.log(err);
  }
}
msg();
