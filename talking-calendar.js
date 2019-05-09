let talkingCalendar = function(date) {
  // Your code here
  var dateArr = date.split("/");
  dateArr[0] = Number(dateArr[0]);
  dateArr[1] = Number(dateArr[1]);
  dateArr[2] = Number(dateArr[2]);
  var dateMsg = "";
  console.log(dateArr);
  //month
  switch (dateArr[1]) {
    case 1:
      dateMsg += "January";
      break;
    case 2:
      dateMsg += "February";
      break;
    case 3:
      dateMsg += "March";
      break;
    case 4:
      dateMsg += "April";
      break;
    case 5:
      dateMsg += "May";
      break;
    case 6:
      dateMsg += "June";
      break;
    case 7:
      dateMsg += "July";
      break;
    case 8:
      dateMsg += "August";
      break;
    case 9:
      dateMsg += "September";
      break;
    case 10:
      dateMsg += "October";
      break;
    case 11:
      dateMsg += "November";
      break;
    case 12:
      dateMsg += "December";
      break;
    default:
  }
  dateMsg += " ";
  //day
  dateMsg += dateArr[1];
  if (dateArr[1] >= 4 && dateArr[1] <= 20) {
    dateMsg += "th";
  } else if (dateArr[1] % 10 === 1) {
    dateMsg += "st";
  } else if (dateArr[1] % 10 === 2) {
    dateMsg += "nd";
  } else if (dateArr[1] % 10 === 3) {
    dateMsg += "rd";
  }
  dateMsg += ", ";

  //year
  dateMsg += dateArr[0];
  return dateMsg;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
