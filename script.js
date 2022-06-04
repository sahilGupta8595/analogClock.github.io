let hour = document.querySelector('#hourHand');
let minute = document.querySelector('#minuteHand');
let second = document.querySelector('#secondHand');
setInterval(() => {
  let date = new Date();
let hTime=date.getHours();
let mTime=date.getMinutes();
let sTime=date.getSeconds();
  hour.style.transform =`rotate(${30 * hTime + mTime / 2 + sTime/ 120}deg)`;
  minute.style.transform = `rotate(${6 * mTime + sTime / 10}deg)`;
  second.style.transform = `rotate(${6 * sTime}deg)`;
}, 1000);
