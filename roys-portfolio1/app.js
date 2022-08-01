const open = document.getElementById('open'); 
const close = document.getElementById('close'); 
const mobileNav = document.getElementById('nav_mobile'); 

// Event listeners  
open.addEventListener('click',openMobileNav); 
close.addEventListener('click', closeMobileNav); 


// Functions 
function openMobileNav() {
    console.log(12345)
    mobileNav.classList.add('open-nav')
    open.classList.add('close-icon')
    close.classList.add('open-icon')
} 

function closeMobileNav() {
    console.log("Is closed") 
    open.classList.remove('close-icon') 
    close.classList.remove('open-icon')
    mobileNav.classList.remove('open-nav')
}

// Typed animations
var typed = new Typed(('.typing'), {
    strings:['Welcome to my portfolio','Scroll down for more'], 
    typeSpeed:70, 
    BackSpeed:60, 
    loop:true 
})

// Preloader  
const preloader = document.getElementById('preloader') 

window.addEventListener('load', () => {
    preloader.style.display = 'none'
})
 
// setTimeout(() => {
//     preloader.style.display = 'none'
// },3000)

// GSAP animations
const t1 = gsap.timeline({defaults: { ease: "power1.out"}}); 

t1.to('.text', {y: 0, duration: 2, stagger: 0.25})
t1.fromTo('.nav-logo', {opacity:0}, {opacity: 1, duration: 2}, '-=2')
t1.fromTo('.hamburger-menu', {opacity:0}, {opacity: 1, duration: 2}, '-=2')
t1.fromTo('.nav-content', {opacity:0}, {opacity: 1, duration: 2}, '-=2')
