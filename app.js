const body = document.querySelector(".body");
const allPills = document.querySelectorAll(".pill");
const allBoxes = document.querySelectorAll(".box");
const allArrows = document.querySelectorAll(".arrow");
const allHiddenPills = document.querySelectorAll(".hidden-pill");
const sliderInput = document.querySelector("#slider-input");
const expandPill = document.querySelector("#expand");
const xLetter = document.querySelector("#x-letter");
const xLetterSVG = document.querySelector("#x-svg-letter");
const xBox = document.querySelector(".x-box");
const socialFan = document.querySelector(".social-fan");
const reversePill = document.querySelector("#reverse");
const iconPath = document.querySelector("#icon");
const boxContainer = document.querySelector(".box-container");
const hiddenBox = document.querySelector(".hidden-box");
const textBox = document.querySelector(".hidden-box .text-box");

let palatteIndex = 0;
const xLetterIndex = 11;
const socialFanIndex = 1;
const rotateIconIndex = 3;

xLetterSVG.style.fill = colorPalettes[palatteIndex][xLetterIndex].fill;
allPills.forEach(
  (pill, i) =>
    (pill.style.backgroundColor = colorPalettes[palatteIndex][i].fill)
);
allHiddenPills.forEach(
  (pill) =>
    (pill.style.backgroundColor =
      colorPalettes[palatteIndex][socialFanIndex].fill)
);
const expand = () => {
  if (hiddenBox.clientWidth !== 0) {
    textBox.classList.add("hidden");
    setTimeout(() => (hiddenBox.style.width = "0"), 500);
  } else {
    hiddenBox.style.width = "1700px";
    setTimeout(() => textBox.classList.remove("hidden"), 500);
  }
};

const reverse = () => {
  if (boxContainer.style.flexWrap === "wrap")
    boxContainer.style.flexWrap = "wrap-reverse";
  else boxContainer.style.flexWrap = "wrap ";
};

const moveSlider = () => {};
expandPill.addEventListener("click", expand);

reversePill.addEventListener("click", reverse);

sliderInput.addEventListener("input", moveSlider);
