let number = prompt("กรุณาระบุเลขที่จะซื้อ!!!");
let result = Math.floor(Math.random()*10)
if (number == result) {
  document.getElementById("result").innerHTML = "ยินดีด้วยคุณถูกหวย!!!!"
} else document.getElementById("result").innerHTML =  "ยินดีด้วยคุณถูกหวยแดรกกก!!!!"

document.getElementById("num1").innerHTML = number
document.getElementById("num2").innerHTML = result