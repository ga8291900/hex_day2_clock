(function(){
  const handHour = document.getElementById('hour');
  const handMin = document.getElementById('min');
  const handSec = document.getElementById('sec');

  function getTime(){
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    handHour.style.transform = `rotate(${-90 + 360 / 12 * hour + 30 / 60 * min}deg)`;
    handMin.style.transform = `rotate(${360 / 60 * min + 6 / 60 * sec}deg)`;
    handSec.style.transform = `rotate(${180 + 360 / 60 * sec}deg)`;
  }
  setInterval(getTime, 1000);
  getTime();
}())