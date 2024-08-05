const orthoHeader = document.querySelector(".headerOrtho");
const orthoImg = document.querySelector(".orthoHeaderImg");
const content = document.querySelector(".hidden1");

const imageRemover1 = () => {
  orthoImg.classList.toggle("hidden");
  orthoHeader.classList.toggle("hidden");
  content.classList.toggle("hidden");
};

orthoImg.addEventListener("mouseover", imageRemover1);

const imageRemover2 = () => {
  contentHeart.classList.toggle("hidden");
  heartImg.classList.toggle("hidden");
  headerHeart.classList.toggle("hidden");
};

const contentHeart = document.querySelector(".contentHeart");
const headerHeart = document.querySelector(".headerheart");
const heartImg = document.querySelector(".heartHeaderImg");

heartImg.addEventListener("mouseover", imageRemover2);

const imageRemover3 = () => {
  contentNeuro.classList.toggle("hidden");
  neuroImg.classList.toggle("hidden");
  headerNeuro.classList.toggle("hidden");
};

const contentNeuro = document.querySelector(".contentNeuro");
const headerNeuro = document.querySelector(".headerNeuro");
const neuroImg = document.querySelector(".neuroHeaderImg");

neuroImg.addEventListener("mouseover", imageRemover3);
