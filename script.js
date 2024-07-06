const TargetDate = new Date("2025-01-01 00:00:00 ");
function UpadateCountDown() {
  const CurrentDate = new Date();
  const Difference = TargetDate - CurrentDate;
  const Days = Math.floor(Difference / 1000 / 60 / 60 / 24);
  const Hours = Math.floor(Difference / 1000 / 60 / 60) % 24;
  const Minutes = Math.floor(Difference / 1000 / 60) % 60;
  const Seconds = Math.floor(Difference / 1000) % 60;
  document.getElementById(
    "CountDownTimer"
  ).innerHTML = `${Days}d ${Hours}h ${Minutes}m ${Seconds}s`;
}
setInterval(UpadateCountDown, 1000);

if (CurrentDate == TargetDate) {
  document.getElementById("CountDownTimer").innerHTML = "Happy New Year";
} else {
  document.getElementById(
    "CountDownTimer"
  ).innerHTML = `${Days}d ${Hours}h ${Minutes}m ${Seconds}s`;
}
