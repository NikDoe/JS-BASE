"use strict";

const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

const dragStart = (e) => {
  e.target.classList.add("hold");
  setTimeout(() => e.target.classList.add("hide"), 0);
};

const dragEnd = (e) => {
  e.target.classList.remove("hold", "hide");
};

const dragOver = (e) => {
  e.preventDefault();
};
const dragEnter = (e) => {
  e.target.classList.add("hovered");
};
const dragLeave = (e) => {
  e.target.classList.remove("hovered");
};
const drop = (e) => {
  e.target.classList.remove("hovered");
  e.target.append(item);
};

item.addEventListener("dragstart", dragStart);
item.addEventListener("dragend", dragEnd);

placeholders.forEach((p) => {
  p.addEventListener("dragover", dragOver);
  p.addEventListener("dragenter", dragEnter);
  p.addEventListener("dragleave", dragLeave);
  p.addEventListener("drop", drop);
});
