const clock = document.createElement("div");
clock.id = "Clock";
live.appendChild(clock);

function updateClock() {
  let now = new Date();
  if (now.getMinutes() < 10) {
  clock.innerText = now.getHours() + ':' + '0' + now.getMinutes();
  }
  else {
    clock.innerText = now.getHours() + ':' + now.getMinutes();
  }
}

updateClock();
setInterval(updateClock, 1000);
