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

prevBtn.addEventListener('click', ()=>{
    containerSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    containerSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
 
});
 
//Looping the images

containerSlide.addEventListener('transitionend', ()=> {
    if(containerImages[counter].id === 'lastClone') {
        containerSlide.style.transition = "none";
        counter = containerImages.length -2;
        containerSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if(containerImages[counter].id === 'firstClone') {
        containerSlide.style.transition = "none";
        counter = containerImages.length - counter;
        containerSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});