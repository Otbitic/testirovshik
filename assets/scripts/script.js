const gap = 0;

const carousel = document.getElementById("carousel"),
content = document.getElementById("content"),
next = document.getElementById("next"),
prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
});

prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
});
let width = 1290;