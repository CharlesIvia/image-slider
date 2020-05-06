const containerSlide = document.querySelector(".container-slide");
console.log(containerSlide);
const containerImages = document.querySelectorAll(".container-slide img");

//Buttons

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//Counter

let counter = 1;
const size= containerImages[0].clientWidth;

containerSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners

nextBtn.addEventListener('click', ()=>{
   containerSlide.style.transition = "transform 0.4s ease-in-out";
   counter++;
   containerSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

 });

