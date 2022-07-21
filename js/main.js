// function
function classSwitcher () {
    slides.forEach(slide => slide.classList.remove("active"));
    points.forEach(slide => slide.classList.remove("active"));
    slides[active].classList.add("active")
    points[active].classList.add("active")
}

let goNext = () => {
    active = (active == slides.length - 1) ? 0 : active + 1;
    classSwitcher ()
}

let goPrev = () => {
    active = (active == 0) ? slides.length - 1: active - 1;
    classSwitcher ()
}





// variables
let active = 0;
let timer = 5000;

let slideshow = document.querySelector(".slideshow");
let slides = document.querySelectorAll(".slide")
let points = document.querySelectorAll(".points > span")
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

// setInteval
setInterval(goNext, timer);

// point event
// points.forEach((point, index )=> {
//     point.addEventListener("click", e => {
//         active = index;
//         classSwitcher ()
//     })
// })

// next events
next.addEventListener("click", e => goNext())

// prev even
prev.addEventListener("click", e => goPrev());



