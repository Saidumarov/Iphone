let time = document.querySelector(".time");
let time1 = document.querySelector(".time1");
let time2 = document.querySelector(".time2");
let time3 = document.querySelector(".time3");

let clockTime = document.getElementById("clockTime");

setInterval(() => {
  let time_one = new Date().toLocaleTimeString("it-It").slice(0, 5);
  time.innerHTML = time_one;
  time1.innerHTML = time_one;
  time2.innerHTML = time_one;
  time3.innerHTML = time_one;
}, 100);

setInterval(() => {
  let time_one = new Date().toLocaleTimeString("it-It");
  clockTime.innerHTML = time_one;
}, 100);

const clock = () => {
  document.querySelector(".phone_card1").classList.toggle("active");
};

function soat() {
  document.querySelector(".phone_card1_item").style.display = "flex";
  document.querySelector(".phone_card1_item1").style.display = "none";
  document.querySelector(".phone_card1_item2").style.display = "none";
}
function tymer() {
  document.querySelector(".phone_card1_item").style.display = "none";
  document.querySelector(".phone_card1_item1").style.display = "flex";
  document.querySelector(".phone_card1_item2").style.display = "none";
}
function alary() {
  document.querySelector(".phone_card1_item").style.display = "none";
  document.querySelector(".phone_card1_item1").style.display = "none";
  document.querySelector(".phone_card1_item2").style.display = "flex";
}

// // taymer

let minut = document.getElementById("max");
let secound = document.getElementById("min");
let start = document.querySelector(".start");
let stopp = document.querySelector(".stop");
let audio = document.getElementById("audio");
let start1 = document.querySelector(".start1");
let stopp1 = document.querySelector(".stop1");
let audio1 = document.getElementById("audio1");
let timeBud = document.getElementById("timeBud");
// // taymer
//  minut
minut.addEventListener("input", (e) => {
  let value = parseInt(e.target.value);
  if (value && value <= 60) {
  } else if (value > 60) {
    minut.value = 59;
  } else {
    minut.value = "";
  }
});
// scount
secound.addEventListener("input", (e) => {
  let value = parseInt(e.target.value);
  if (value && value <= 60) {
  } else if (value > 60) {
    secound.value = 59;
  } else {
    secound.value = "";
  }
});

let timerInterval;
// Function to start the timer
const startTimer = () => {
  // Get the values of minutes and seconds
  let minutes = parseInt(minut.value);
  let seconds = parseInt(secound.value);

  // If minutes or seconds are empty or not numbers, set them to 0
  minutes = isNaN(minutes) ? 0 : minutes;
  seconds = isNaN(seconds) ? 0 : seconds;

  // If seconds exceed 60, set them to 59
  if (seconds > 59) {
    secound.value = 59;
    seconds = 59;
  }

  // If minutes exceed 60, set them to 59
  if (minutes > 60) {
    minut.value = 59;
    minutes = 59;
  }

  let totalSeconds = minutes * 60 + seconds;

  timerInterval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
      audio.play();
    } else {
      totalSeconds--;
      let remainingMinutes = Math.floor(totalSeconds / 60);
      let remainingSeconds = totalSeconds % 60;
      secound.value = remainingSeconds;
      minut.value = remainingMinutes;
    }
  }, 1000);
};

// Function to stop the timer and reset values to 0
const stopTimer = () => {
  clearInterval(timerInterval);
  minut.value = 0;
  secound.value = 0;
};

// Event listener for the start button
start.addEventListener("click", (e) => {
  e.preventDefault();
  startTimer();
});

// Event listener for the stop button
stopp.addEventListener("click", (e) => {
  e.preventDefault();
  stopTimer();
  audio.pause();
});

// budinlik

let intervalId;

timeBud.addEventListener("input", (e) => {
  e.preventDefault();
  let value = e.target.value;
  clearInterval(intervalId);
  start1.addEventListener("click", (e) => {
    e.preventDefault();
    intervalId = setInterval(() => {
      let time_one = new Date().toLocaleTimeString("it-It").slice(0, 5);
      if (value === time_one) {
        audio1.play();
      }
    }, 1000);
  });
});

stopp1.addEventListener("click", (e) => {
  e.preventDefault();
  clearInterval(intervalId);
  audio1.pause();
});
