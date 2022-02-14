function clickme() {
  let weight = document.getElementById("inputWeight").value;
  let height = document.getElementById("inputHeight").value;
  let bmi = Number(weight) / Math.pow(Number(height) / 100, 2);
  if (weight.length == 0 || height.length == 0) {
    alert("กรุณากรอกข้อมูลให้ครบถ้วน");
  } else {
    document.getElementById("yourBMI").innerHTML =
      "ค่า BMI ของคุณคือ : " + bmi.toFixed(2);
    if (bmi < 18.5) {
      document.getElementById("imgBMI").src =
        "https://st3.depositphotos.com/6436316/12529/v/600/depositphotos_125297812-stock-illustration-young-man-in-white-shirt.jpg";
      document.getElementById("detail1").innerHTML =
        " อยู่ในเกณท์ น้ำหนักน้อย / ผอม";
      document.getElementById("detail2").innerHTML =
        "ข้อแนะนำ <br>1. ควรกินอาหารให้หลากหลายครบ 5 หมู่ในสัดส่วนที่เหมาะสมและปริมาณมากขึ้น โดยเพิ่มอาหารประเภทที่ให้พลังงานมากขึ้น <br>2. ควรเคลื่อนไหวและออกกำลังกายอย่างสม่ำเสมอทุกวันหรือเกือบทุกวัน ให้เหนื่อยพอควรโดยหายใจกระชั้นขึ้น ";
    } else if (bmi >= 18.5 && bmi <= 22.9) {
      document.getElementById("imgBMI").src =
        "https://thumbs.dreamstime.com/b/sportive-cartoon-character-boy-normal-weight-isolated-vector-illustration-white-background-79246741.jpg";
      document.getElementById("detail1").innerHTML =
        " อยู่ในเกณท์ ปกติ (สุขภาพดี)";
      document.getElementById("detail2").innerHTML =
        "ข้อแนะนำ <br>1. ควรกินอาหารให้หลากหลายครบ 5 หมู่ในสัดส่วนที่เหมาะสม <br> 2. ควรเคลื่อนไหวและออกกำลังกายอย่างสม่ำเสมอทุกวัน หรือเกือบทุกวัน อย่างน้อยให้เหนื่อยพอควร";
    }
    else if (bmi >= 23 && bmi <= 24.90) {
      document.getElementById("imgBMI").src =
        "https://www.kindpng.com/picc/m/212-2128346_the-fat-man-fat-overweight-man-healthy-vs.png";
      document.getElementById("detail1").innerHTML =
        " อยู่ในเกณท์ ท้วม / โรคอ้วนระดับ 1";
      document.getElementById("detail2").innerHTML =
        "ข้อแนะนำ <br>1. 1. ควรควบคุมอาหาร โดยลดปริมาณอาหารหรือปรับเปลี่ยนอาหารจากที่ให้พลังงานมากเป็นอาหารที่ให้พลังงานน้อย <br> 2. ควรเคลื่อนไหวและออกกำลังกายแบบแอโรบิกอย่างสม่ำเสมอทุกวัน หรือเกือบทุกวัน";
    }
    else if (bmi >= 25 && bmi <= 29.9) {
      document.getElementById("imgBMI").src =
        "https://us.123rf.com/450wm/morphart/morphart2007/morphart200707295/152573253-chubby-boy-illustration-vector-on-white-background-.jpg?ver=6";
      document.getElementById("detail1").innerHTML =
        " อยู่ในเกณท์ อ้วน / อ้วนระดับ 2";
      document.getElementById("detail2").innerHTML =
        "ข้อแนะนำ <br>1. ควรควบคุมอาหารโดยลดปริมาณอาหารหรือปรับเปลี่ยนอาหารจากที่ให้พลังงานมากเป็นอาหารที่ให้พลังงานน้อย <br> 2. ควรเคลื่อนไหวและออกกำลังกายอย่างสม่ำเสมอทุกวัน หรือเกือบทุกวัน อย่างน้อยให้เหนื่อยพอควร";
    }
    else if (bmi >30) {
      document.getElementById("imgBMI").src =
        "https://www.pinclipart.com/picdir/big/551-5513277_fat-cartoon-man-fat-man-clipart-png-download.png";
      document.getElementById("detail1").innerHTML =
        " อยู่ในเกณท์ อ้วนมาก / อ้วนระดับ 3";
      document.getElementById("detail2").innerHTML =
        "ข้อแนะนำ <br>1. ควรควบคุมอาหารโดยลดปริมาณอาหารหรือปรับเปลี่ยนอาหารจากที่ให้พลังงานมากเป็นอาหารที่ให้พลังงานน้อย <br> 2. ควรเคลื่อนไหวและออกกำลังกายอย่างสม่ำเสมอทุกวัน หรือเกือบทุกวัน อย่างน้อยให้เหนื่อยพอควร";
    }
  }
}
