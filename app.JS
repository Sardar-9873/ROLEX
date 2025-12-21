let index = 0;

function next() {
  index++;
  move();
}

function prev() {
  index--;
  move();
}

function move() {
  const slider = document.querySelector('.slider');
  const images = document.querySelectorAll('.slider img');
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;
  slider.style.transform = `translateX(${-300 * index}px)`;
}

alert("JavaScript connected successfully!");
