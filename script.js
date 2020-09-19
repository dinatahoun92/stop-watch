const play = document.getElementById("play"),
  pause = document.getElementById("pause"),
  clock = document.getElementById("clock"),
  reset = document.getElementById("reset"),
  hrs = document.getElementById("hrs"),
  mins = document.getElementById("mins"),
  secs = document.getElementById("secs");
var hrsVal = 0,
  minsVal = 0,
  secsVal = 0;
let interval = null;

play.onclick = () => {
  play.style.display = "none";
  pause.style.display = "block";
  interval = window.setInterval(stopWatch, 1000);
};
pause.onclick = () => {
  pause.style.display = "none";
  play.style.display = "block";
  window.clearInterval(interval);
};
reset.onclick = () => {
  hrsVal = 0;
  minsVal = 0;
  secsVal = 0;
  secs.innerHTML = "00";
  mins.innerHTML = "00";
  hrs.innerHTML = "00";
  pause.style.display = "none";
  play.style.display = "block";
  window.clearInterval(interval);
};

let stopWatch = () => {
  secsVal++;
  if (secsVal / 60 === 1) {
    secsVal = 0;
    minsVal++;
    if (minsVal / 60 === 1) {
      minsVal = 0;
      hrsVal++;
    }
  }

  secsVal.toString().length < 2
    ? (secs.innerHTML = "0" + secsVal)
    : (secs.innerHTML = secsVal);
  minsVal.toString().length < 2
    ? (mins.innerHTML = "0" + minsVal)
    : (mins.innerHTML = minsVal);
  hrsVal.toString().length < 2
    ? (hrs.innerHTML = "0" + hrsVal)
    : (hrs.innerHTML = hrsVal);
};
