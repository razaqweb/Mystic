const navItem = document.querySelectorAll(".nav-item");
const navLink = document.querySelector(".nav-link");
const navBar = document.querySelector(".nav-items");
const modelBtn = document.querySelector(".model-button");
const bookingBtn = document.querySelector(".booking-button");

// Smooth Navigation

const smoothScroll = (e) => {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
};

const smoothScrollNav = (e) => {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  if (!e.target.classList.contains("nav-link")) return;
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
};

navBar.addEventListener("click", smoothScrollNav);
modelBtn.addEventListener("click", smoothScroll);
bookingBtn.addEventListener("click", smoothScroll);
