function getDays(str1, str2) {
  var date1 = new Date(str1);
  var date2 = new Date(str2);
  let difference = date2.getTime() - date1.getTime();
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return TotalDays;
}

console.log(getDays("June-14-2019", "June 20, 2019"));
console.log(getDays("December-29-2018", "January 1, 2019"));
console.log(getDays("July-20-2019", "July 30, 2019"));
