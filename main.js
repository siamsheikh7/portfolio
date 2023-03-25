const navToggler = document.querySelector(".nav-toggle");
navToggler.addEventListener("click", navToggle);

function navToggle(){
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
      nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else{
        nav.removeAttribute("style");
    }
}


var swiper = new Swiper(".slider_section", {
slidesPerView: 1,
spaceBetween: 20,
loop:true,
grabCursor:true,
centeredSlides:true,
autoplay: {
delay: 9500,
disableOnInteraction:false,
},
pagination: {
el: ".swiper-pagination",
clickable: true,
},
breakpoints: {
0: {
slidesPerView: 1,
},
768: {
slidesPerView: 2,
},
991: {
slidesPerView: 3,

},
},
});