// fanction
function classSwitcher () {
   
    slides.forEach(slide => slide.classList.remove("active"));
    slides[active].classList.add("active")
     
 }
 
 let goNext = () => {
    active = (active == slides.length -1) ? 0 : active + 1;
    classSwitcher ()
 }
 
 let goPrev = () => {
    active = (active == 0) ? slides.length -1 : active - 1;
    classSwitcher ()
 }
 
 // variables
 let active = 0;
 let timer = 4000;
 
 let slideshow = document.querySelector(".slideshow") ;
 let slides = document.querySelectorAll(".slide")
 let prev = document.querySelector(".prev");
 let next = document.querySelector(".next");
 
 // setInterval
 setInterval(goNext, timer);
 
 
 // next event
 next.addEventListener("click", e => goNext());
 
 // prev event
 prev.addEventListener("click", e => goPrev());



// sticky navbar
// scroll smoth
let topMenu = document.querySelector(".top-menu");
let scroll = document.querySelector(".scroll")
window.addEventListener("scroll", e => {
    if(scrollY > 500) {
        topMenu.classList.add("sticky");
        scroll.classList.add("show");
    }else{
        topMenu.classList.remove("sticky");
        scroll.classList.remove("show");
    }
})

scroll.addEventListener("click", e => {
    if(scroll.classList.contains("show")){
        window.scrollTo({top:0, behavior:"smooth"})
    }
})


