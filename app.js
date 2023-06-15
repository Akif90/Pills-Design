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

reversePill.addEventListener("click", reverse);

const addTheme = (
  bodyBackgroundColor,
  strokeWidth,
  svgFill,
  opacity,
  lineColor,
  borderRadius,
  boxBAckgroundColor,
  pillBackgroundColor
) => {
  xLetter.style.strokeWidth = strokeWidth;

  xLetter.style.stroke =
    lineColor || colorPalettes[palatteIndex][xLetterIndex].altStroke;
  // body.style.backgroundColor = bodyBackgroundColor;

  xLetterSVG.style.fill =
    svgFill || colorPalettes[palatteIndex][xLetterIndex].fill;

  xLetterSVG.style.opacity = opacity;

  xBox.style.backgroundColor =
    boxBAckgroundColor || colorPalettes[palatteIndex][xLetterIndex].fill;

  iconPath.style.stroke =
    lineColor || colorPalettes[palatteIndex][rotateIconIndex].altStroke;

  iconPath.style.strokeWidth = strokeWidth;

  allBoxes.forEach((box, i) => {
    box.style.backgroundColor =
      boxBAckgroundColor || colorPalettes[palatteIndex][i].fill;
  });

  allPills.forEach((pill, i) => {
    pill.style.opacity = opacity;

    pill.style.backgroundColor =
      pillBackgroundColor || colorPalettes[palatteIndex][i].fill;

    pill.style.borderWidth = strokeWidth;

    pill.style.borderColor =
      lineColor || colorPalettes[palatteIndex][i].altStroke;

    pill.style.borderBlockStyle = "solid";

    pill.style.borderRadius = borderRadius;
  });

  allHiddenPills.forEach((pill) => {
    pill.style.opacity = opacity;

    pill.style.borderWidth = strokeWidth;

    pill.style.backgroundColor =
      pillBackgroundColor || colorPalettes[palatteIndex][socialFanIndex].fill;

    pill.style.borderColor =
      lineColor || colorPalettes[palatteIndex][socialFanIndex].altStroke;

    pill.style.borderRadius = borderRadius;
  });

  allArrows.forEach((arrow) => {
    arrow.style.borderBlockStyle = "solid";

    arrow.style.borderColor = lineColor;

    arrow.style.borderWidth = "0 " + strokeWidth + " " + strokeWidth + " 0";

    arrow.style.opacity = opacity;
  });
};

const moveSlider = () => {
  const sliderInput = document.querySelector("#slider-input");
  const sliderValue = sliderInput.value;

  if (sliderValue == 0) {
    addTheme("white", "12px", null, 1, "rgb(38,38,38)", "100px", "white", null);
  }

  if (sliderValue >= 1 && sliderValue <= 3) {
    addTheme("white", "2px", "white", 0.5, null, "75px", null, "white");
  }

  if (sliderValue >= 4 && sliderValue <= 6) {
    addTheme(
      "white",
      "1px",
      "white",
      0.5,
      "rgb(38,38,38)",
      "50px",
      null,
      "white"
    );
  }

  if (sliderValue >= 7 && sliderValue <= 9) {
    addTheme(
      "white",
      "2px",
      "white",
      0.5,
      "rgb(38,38,38)",
      "50px",
      null,
      "white"
    );
  }
  if (sliderValue == 10) {
    addTheme(
      "rgb(38,38,38)",
      "12px",
      "white",
      1,
      "black",
      0,
      "transparent",
      "white"
    );
  }
};
expandPill.addEventListener("click", expand);

sliderInput.addEventListener("input", moveSlider);

const changePallette = () => {
  xLetter.classList.add("pulse");
  if (palatteIndex >= 2) palatteIndex = 0;
  else palatteIndex++;
  moveSlider();

  setTimeout(() => {
    xLetter.classList.remove("pulse");
  }, 500);
};
xBox.addEventListener("click", changePallette);
