const board = document.querySelector("#board");
const body = document.querySelector("body");
const color = [
  "#7de8ea",
  "#dce0cd",
  "#ccdb86",
  "#67a030",
  "#003700",
  "#b3504b",
];

const h = body.clientHeight / 16;
const w = body.clientWidth / 16;
console.log(Math.round(h * w));
const SQUARE_NUMBER = Math.round(h * w);

for (let i = 0; i < SQUARE_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(elem) {
  const color = getRandColor();
  elem.style.backgroundColor = color;
  elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(elem) {
  elem.style.backgroundColor = "#ffffff";
  elem.style.boxShadow = `0 0 2px #000`;
}

function getRandColor() {
  const index = Math.floor(Math.random() * color.length);
  return color[index];
}
