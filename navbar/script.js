//console.log(' hell0');
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', function () {
    eventHandler(nav, navLinks, burger);
  });
};

navSlide();
//ANIMATE FUNCTION
const animateFunction = (link, index) => {
  console.log(link, index);
  if (link.style.animation) {
    link.style.animation = '';
  } else {
    link.style.animation = 'navLinkFade 0.5s ease forward ${index/7 + 0.3}s';

    // console.log(index);
  }
};
//animate function
//
const eventHandler = (nav, navLinks, burger) => {
  nav.classList.toggle('nav-active');
  // console.log(navLinks);
  navLinks.forEach(function (link, index) {
    animateFunction(link, index);
  });
  burger.classList.toggle('toggle');
};

const logFunction = (x = 1, y = 2) => {
  console.log(x, y);
};
logFunction(5, 6);
