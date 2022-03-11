function checkIfValidIP(str) {
  // Regular expression to check if string is a IP address
  const regexExp =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;

  return regexExp.test(str);
}
console.log(checkIfValidIP("1.2.3.4"));
console.log(checkIfValidIP("1.2.3"));
console.log(checkIfValidIP("1.2.3.4.5"));
console.log(checkIfValidIP("123.45.67.89"));
console.log(checkIfValidIP("123.456.78.90"));
console.log(checkIfValidIP("123.045.067.089"));

