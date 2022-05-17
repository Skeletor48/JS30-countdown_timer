function initTimer(endtime) {
  const timer = document.getElementById('timerwrapper');
  const daysContainer = timer.querySelector('.days');
  const hoursContainer = timer.querySelector('.hours');
  const minutesContainer = timer.querySelector('.minutes');
  const secondsContainer = timer.querySelector('.seconds');

  function updateClock() {
    const t = getRemainingTime(endtime);

    daysContainer.innerHTML = t.days;
    hoursContainer.innerHTML = `${t.hours < 10 ? '0' : ''}${t.hours}`
    minutesContainer.innerHTML = `${t.minutes < 10 ? '0' : ''}${t.minutes}`
    secondsContainer.innerHTML = `${t.seconds < 10 ? '0' : ''}${t.seconds}`

    if (t.total <= 0) {
      clearInterval(timeinterval);
      alert('GAME OVER!!!!!');
    }
  }

  updateClock(); 
  const timeinterval = setInterval(updateClock, 1000);
}

function getRemainingTime(endtime) {
  const total = endtime - Date.now();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

document.addTime.addEventListener('submit', function(e) {
  e.preventDefault();
  const days = this.days.value * 86400000;
  const hours = this.hours.value * 3600000;
  const seconds = this.seconds.value * 1000;
  const minutes = this.minutes.value * 60000;

  const endtime = Date.now() + days + hours + seconds + minutes;
  initTimer(endtime);
  this.reset();
});
