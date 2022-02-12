setInterval(setClock, 10);

const hourHand = document.querySelector('[data-hour-hand]');
const newHourHand = document.getElementById('hourHand');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
  return currentDate;
}
function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360);
  // element.style.setProperty('background-color', 'white');
}
//
// setClock();
console.log(new Date(), setClock(), new Date().getSeconds());
//hello
