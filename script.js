// 🧠 Get DOM elements
const currentPageSpan = document.getElementById("current-page");
const timerSpan = document.getElementById("timer");
const sessionList = document.getElementById("session-list");

// 🔍 Detect the current URL
const currentURL = window.location.href;
currentPageSpan.innerText = currentURL;

// ⏱ Timer setup
let seconds = 0;

const timer = setInterval(() => {
  seconds++;
  timerSpan.innerText = `${seconds}s`;
}, 1000);

// 🧠 Save session on page unload
window.addEventListener("beforeunload", () => {
  const storedSessions = JSON.parse(localStorage.getItem("tabbySessions")) || [];

  storedSessions.push({
    url: currentURL,
    duration: seconds
  });

  localStorage.setItem("tabbySessions", JSON.stringify(storedSessions));
});
