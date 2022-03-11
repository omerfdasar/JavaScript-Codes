const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const pmam = document.querySelector(".pmam");
let display = document.querySelector(".clock");
const updateTime = () => {
  let currentTime = new Date();
  let currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  let currentSecond = currentTime.getSeconds();
  let PmAm;
  if (currentHour > 12) {
    currentHour -= 12;
    PmAm = " PM";
  } else PmAm = " AM";
  if (currentSecond < 10) {
    currentSecond = "0" + currentSecond;
  }
  display.innerText = `${currentHour.toString()}:${currentMinute.toString()}:${currentSecond}${PmAm}`;
};
setInterval(updateTime, 1000);
updateTime();
