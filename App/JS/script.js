//i have to settle the coming date
const targettedgDate = "1 jan 2023";

const jour = document.querySelector(".jours");
const heurs = document.querySelector(".heures");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".secondes");

//function

function countDownDate() {
  /*coming  and current date have to be convert to number so we can make calculations with . i use getTime() for that
   */

  //current date
  const currentDate = new Date().getTime();
  const targettedDateInNumber = new Date(targettedgDate).getTime();

  /* to know the number of days , we have to find the difference between currentDate and targetingDateInNumber
   */

  const DateDifference = targettedDateInNumber - currentDate;

  /*DateDifference is in milliseconds , so we have to convert it in to days, hours , minutes , seconds...we know that, for that we have to find how many milliseconds are in days , hours , minutes ,seconds :

  1secs = 1000ms;
  1min = 60 secs;
  1hrs = 60mins;
  1day = 24hrs;
   */
  const days = 24 * 60 * 60 * 1000;
  const hrs = 60 * 60 * 1000;
  const mins = 60 * 1000;
  const secs = 1000;

  const day = Math.floor(DateDifference / days);
  const hour = Math.floor((DateDifference % days) / hrs);

  const min = Math.floor((DateDifference % hrs) / mins);

  const sec = Math.floor((DateDifference % mins) / secs);

  jour.innerText = formatDate(day);
  heurs.innerText = formatDate(hour);
  minutes.innerText = formatDate(min);
  seconds.innerText = formatDate(sec);
}
setInterval(countDownDate, 1000);
/*
to put date in a two digit numbers when it is less than 10
*/
function formatDate(time) {
  return time < 10 ? `0${time}` : `${time}`;
}
