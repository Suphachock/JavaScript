function numDays(str1, str2) {
  var date1 = new Date(str1);
  var date2 = new Date(str2);
  let difference = date2.getTime() - date1.getTime();
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return TotalDays - 1;
}

console.log(numDays("June-12-2019", "June 20, 2019"));
console.log(numDays("December-28-2018", "January 1, 2019"));
console.log(numDays("June-25-2019", "July 2, 2019"));
