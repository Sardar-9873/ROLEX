// let index = 0;

// function next() {
//   index++;
//   move();
// }

// function prev() {
//   index--;
//   move();
// }

// function move() {
//   const slider = document.querySelector('.slider');
//   const images = document.querySelectorAll('.slider img');
//   if (index < 0) index = images.length - 1;
//   if (index >= images.length) index = 0;
//   slider.style.transform = `translateX(${-300 * index}px)`;
// }

// alert("JavaScript connected successfully!");

let index = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;

function showSlide(i) {
  slides.style.transform = `translateX(${-i * 100}vw)`;
}

document.querySelector('.next').onclick = () => {
  index = (index + 1) % totalSlides;
  showSlide(index);
};

document.querySelector('.prev').onclick = () => {
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide(index);
};

/* Auto slide */
setInterval(() => {
  index = (index + 1) % totalSlides;
  showSlide(index);
}, 4000);
