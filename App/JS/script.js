//i have to settle the coming date
const targetingDate = "1 jan 2023";

const jour = document.querySelector(".jour");
const heurs = document.querySelector(".heurs");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

//function

function countDownDate() {
  /*coming date and current have to be convert to number so we can make calculations with . i use getTime() for that
   */
  //current date
  const currentDate = new Date().getTime();
  const targetingDateInNumber = new Date(targetingDate).getTime();
  /* to know the number of days , we have to find the difference between currentDate and targetingDateInNumber
   */
  const DateDifference = targetingDateInNumber - currentDate;

  /*DateDifference is in milliseconds , so we have to convert it in to days, hours , minutes , seconds...we know that :

  1secs = 1000ms;
  1min = 60 secs;
  1hrs = 60mins;
  1day = 24hrs;
   */
  const days = 24 * 60 * 60 * 1000;
  const hrs = 60 * 60 * 1000;
  const mins = 60 * 1000;
  const secs = 1000;

  jour.innerText = Math.floor(DateDifference / days);
  heurs.innerText = Math.floor((DateDifference % days) / hrs);

  minutes.innerText = Math.floor((DateDifference % hrs) / mins);

  seconds.innerText = Math.floor((DateDifference % mins) / secs);
}
setInterval(countDownDate, 1000);

// function formatDate(time) {
//   time < 10 ? `0${time}` : `${time}`;
// }