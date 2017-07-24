const chalk = require('chalk');
const moment = require('moment');
// const isDST = moment().isDST()

// console.log(isDST);
function dst() {
  if (moment().isDST() == true) {
    return "is"
  } else {
    return "is not"
  }
  return dst
}

function lpy() {
  if (moment().isLeapYear() == true) {
    return "is"
  } else {
    return "is not"
  }
  return lpy
}

// console.log(chalk.green(''));
console.log("It is " + chalk.blue(moment().format("dddd, MMMM, Do YYYY, h:mm:ss a")));

console.log("It is the " + chalk.magenta(moment().format("DDDo")) + " day of the year");

console.log("It is " + chalk.cyan(`${moment().hours()*60*60 + moment().minutes()*60 + moment().seconds()}`) + " seconds into the day");

console.log("It " + chalk.green(dst()) + " Daylight Savings Time.");

console.log("It " + chalk.red(lpy()) + " a leap year.");
