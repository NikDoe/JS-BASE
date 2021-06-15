"use strict";

const setActiveSlide = function (activeSlide = 0) {
  const slides = document.querySelectorAll(".slide");

  slides[activeSlide].classList.add("active");

  const clearActiveClasses = () =>
    slides.forEach((slide) => slide.classList.remove("active"));

  slides.forEach((slide) => {
    slide.addEventListener("click", () => {
      clearActiveClasses();
      slide.classList.add("active");
    });
  });
};

setActiveSlide(4);
