const nav = document.querySelector("nav");
const navContainer = document.querySelector(".nav-container");

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) navContainer.classList.add("sticky");
  else navContainer.classList.remove("sticky");
};

const navObserver = new IntersectionObserver(stickyNav, {
  root: null,
  treshhold: 0,
});

navObserver.observe(nav);

// const link = document.querySelector(".a");
// const section2 = document.querySelector("#section-2");

// link.addEventListener("click", function () {
//   section2.scrollIntoView({
//     behavior: "smooth",
//     rootMargin: `100px`,
//   });
// });

// // NAV
// const menuicon = document.querySelector(".hamburger");
// const navbar = document.querySelector("nav");

// menuicon.addEventListener("click", () => {
//   menuicon.classList.toggle("change");
//   navbar.classList.toggle("change");
// });

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav-container");

hamburger.addEventListener("click", () => {
  //   hamburger.classList.toggle("change");
  navbar.classList.toggle("change");
});
