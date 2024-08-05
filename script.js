const searchIcon = document.querySelector(".searchIcon");
const search = document.querySelector(".search");

const movingPage = () => {
  let input = search.value;
  if (input == `appointment`) window.location.href = `Appointment/index.html`;
  else if (input == `doctors`) window.location.href = `doctor/index.html`;
  else {
    window.location.href = `error/index.html`;
  }
};

searchIcon.addEventListener("click", () => {
  movingPage();
});

document.addEventListener("keypress", function (e) {
  if (e.key === `Enter`) movingPage();
});

const appoint = () => {
  window.location.href = `./Appointment/index.html`;
};

document.querySelector(`.context`).addEventListener("click", () => {
  alert(`We will contact or Call this number 126633`);
});
