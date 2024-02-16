let time = document.querySelector(".time");
let time1 = document.querySelector(".time1");
let time2 = document.querySelector(".time2");
let time3 = document.querySelector(".time3");
let time4 = document.querySelector(".time4");
let time5 = document.querySelector(".time5");

let clockTime = document.getElementById("clockTime");

setInterval(() => {
  let time_one = new Date().toLocaleTimeString("it-It").slice(0, 5);
  time.innerHTML = time_one;
  time1.innerHTML = time_one;
  time2.innerHTML = time_one;
  time3.innerHTML = time_one;
  time4.innerHTML = time_one;
  time5.innerHTML = time_one;
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

// trnaslate
function close1() {
  document.querySelector(".trnaslate").classList.toggle("active");
}

function close2() {
  document.querySelector(".toLow").classList.toggle("active");
}

let input = document.getElementById("textarea1");
let output = document.getElementById("textarea2");

const kril = {
  а: "a",
  б: "b",
  в: "v",
  г: "g",
  д: "d",
  е: "e",
  ё: "yo",
  ж: "j",
  з: "z",
  и: "i",
  й: "y",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "x",
  ц: "ts",
  ч: "ch",
  ш: "sh",
  щ: "sch",
  ъ: "",
  ы: "y",
  ь: "",
  э: "e",
  ю: "yu",
  я: "ya",
  қ: "q",
  ғ: "gʻ",
  ҳ: "h",
  А: "A",
  Б: "B",
  В: "V",
  Г: "G",
  Д: "D",
  Е: "E",
  Ё: "Yo",
  Ж: "J",
  З: "Z",
  И: "I",
  Й: "Y",
  К: "K",
  Л: "L",
  М: "M",
  Н: "N",
  О: "O",
  П: "P",
  Р: "R",
  С: "S",
  Т: "T",
  У: "U",
  Ф: "F",
  Х: "X",
  Ц: "Ts",
  Ч: "Ch",
  Ш: "Sh",
  Щ: "Sch",
  Ъ: "",
  Ы: "Y",
  Ь: "",
  Э: "E",
  Ю: "Yu",
  Я: "Ya",
  Қ: "Q",
  Ғ: "Gʻ",
  Ҳ: "H",
};

let lotin = {
  a: "а",
  b: "б",
  v: "в",
  g: "г",
  d: "д",
  e: "е",
  yo: "ё",
  j: "ж",
  z: "з",
  i: "и",
  y: "й",
  k: "к",
  l: "л",
  m: "м",
  n: "н",
  o: "о",
  p: "п",
  r: "р",
  s: "с",
  t: "т",
  u: "у",
  f: "ф",
  x: "х",
  ts: "ц",
  ch: "ч",
  sh: "ш",
  sch: "щ",
  "": "",
  y: "ы",
  "": "",
  e: "э",
  yu: "ю",
  ya: "я",
  A: "А",
  B: "Б",
  V: "В",
  G: "Г",
  D: "Д",
  E: "Е",
  Yo: "Ё",
  J: "Ж",
  Z: "З",
  I: "И",
  Y: "Й",
  K: "К",
  L: "Л",
  M: "М",
  N: "Н",
  O: "О",
  P: "П",
  R: "Р",
  S: "С",
  T: "Т",
  U: "У",
  F: "Ф",
  X: "Х",
  Ts: "Ц",
  Ch: "Ч",
  Sh: "Ш",
  Sch: "Щ",
  "": "",
  Y: "Ы",
  "": "",
  E: "Э",
  Yu: "Ю",
  Ya: "Я",
};

let treslateH = lotin;

input.addEventListener("input", (e) => {
  let value = e.target.value;
  let latinValue = convertToLatin(value);
  output.value = latinValue;
});

function convertToLatin(krilText) {
  let latinText = "";
  for (let i = 0; i < krilText.length; i++) {
    let krilChar = krilText[i];
    let latinChar = treslateH[krilChar];
    latinText += latinChar || krilChar;
  }
  return latinText;
}

function deletet() {
  input.value = "";
  output.value = "";
}

function copy() {
  navigator.clipboard.writeText(output.value);
}

function krilH() {
  treslateH = kril;
  document.querySelector(".kirlbtn").innerHTML = "Lotin";
  document.querySelector(".lotinbtn").innerHTML = "Kril";
}
function lotonH() {
  treslateH = lotin;
  document.querySelector(".kirlbtn").innerHTML = "Kril";
  document.querySelector(".lotinbtn").innerHTML = "Lotin";
}

let A = document.getElementById("A");
let a = document.getElementById("a");
let Aa = document.getElementById("aa");
let textarea_one = document.getElementById("textarea_one");

textarea_one.addEventListener("input", (e) => {
  let value = e.target.value.toUpperCase();
  let value1 = e.target.value.toLowerCase();
  let value2 = e.target.value.toUpperCase().substring(0, 1);
  let value3 = e.target.value.substring(1);

  A.addEventListener("click", () => {
    textarea_one.value = value;
  });
  a.addEventListener("click", () => {
    textarea_one.value = value1;
  });
  Aa.addEventListener("click", () => {
    textarea_one.value = value2 + value3;
  });
});

// battary
let batarty = document.querySelector(".batarty");
let batteryPromise = navigator.getBattery();
setInterval(() => {
  batteryPromise.then((batteryObject) => {
    batarty.innerHTML = Math.trunc(batteryObject.level * 100) + "%";
  });
}, 1000);
