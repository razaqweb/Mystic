const carousel = document.querySelector(".carousel");
const slider = document.querySelector(".slider-container");
const btnLeft = document.querySelector(".prev");
const btnRight = document.querySelector(".next");
const profile = document.querySelector(".model-profiles");
const body = document.querySelector("body");
const interval = 3000;

// let slides = document.querySelectorAll(".slide");
// let index = 1;

// const firstClone = slides[0].cloneNode(true);
// const lastClone = slides[slides.length - 1].cloneNode(true);

// firstClone.id = "first-clone";
// lastClone.id = "last-clone";

// slider.append(firstClone);
// slider.prepend(lastClone);

// const nextSlide = () => {
//   index++;
//   slider.style.transform = `translateX(${-slideWidth * index}px)`;
// };

// const prevSlide = () => {
//   index--;
//   slider.style.transform = `translateX(${-slideWidth * index}px)`;
// };
// const slideWidth = slides[index].clientWidth;

// slider.style.transform = `translateX(${-slideWidth * index}px)`;

// // const startSlide = () => {
// //   slides = document.querySelectorAll(".slide");
// //   setInterval(() => {
// //     index++;
// //     slider.style.transform = `translateX(${-index}px)`;
// //     slider.style.transition = ".5s";
// //   }, 0);
// // };

// slider.addEventListener("transitionend", () => {
//   slides = document.querySelectorAll(".slide");
//   if (slides[index].id === firstClone.id) {
//     slider.style.transition = "none";
//     index = 1;
//     slider.style.transform = `translateX(${-slideWidth * index}px)`;
//   }
//   if (slides[index].id === lastClone.id) {
//     slider.style.transition = "none";
//     index = slides.length - 2;
//     slider.style.transform = `translateX(${-slideWidth * index}px)`;
//   }
// });

// btnRight.addEventListener("click", () => {
//   slides = document.querySelectorAll(".slide");
//   if (index >= slides.length - 1) return;
//   nextSlide();
//   slider.style.transition = ".5s ease-in-out";
// });

// btnLeft.addEventListener("click", () => {
//   slides = document.querySelectorAll(".slide");
//   // if (index <= 0) return;
//   prevSlide();
//   slider.style.transition = ".5s ease-in-out";
// });

// startSlide();
