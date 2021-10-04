const uppBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sideBAr = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const container = document.querySelector(".container");
const slidesLength = mainSlide.querySelectorAll("div").length;

sideBAr.style.top = `-${(slidesLength - 1) * 100}vh`;

let activeSlide = 0;

uppBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});

document.addEventListener("keydown", (ev) => {
  if (ev.key === "ArrowUp") {
    changeSlide("up");
  } else if (ev.key === "ArrowDown") {
    changeSlide("down");
  }
});

function changeSlide(string) {
  if (string === "up") {
    activeSlide++;

    if (activeSlide === slidesLength) {
      activeSlide = 0;
    }
  } else if (string === "down") {
    activeSlide--;
    if (activeSlide < 0) {
      activeSlide = slidesLength - 1;
    }
  }
  const height = container.clientHeight;
  mainSlide.style.transform = `translateY(-${activeSlide * height}px)`;
  sideBAr.style.transform = `translateY(${activeSlide * height}px)`;
}
