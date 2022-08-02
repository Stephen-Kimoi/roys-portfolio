const open = document.getElementById('open'); 
const close = document.getElementById('close'); 
const mobileNav = document.getElementById('nav_mobile'); 
const about = document.getElementById('about-mob'); 
const work = document.getElementById('work-mob'); 
const cert = document.getElementById('cert-mob'); 
const contact = document.getElementById('contact-mob'); 
const mainContainer = document.getElementById('main_container')

// Event listeners  
open.addEventListener('click',openMobileNav); 
close.addEventListener('click', closeMobileNav); 
about.addEventListener('click', closeMobileNav)
work.addEventListener('click', closeMobileNav)
cert.addEventListener('click', closeMobileNav)
contact.addEventListener('click', closeMobileNav)


// Functions 
function openMobileNav() {
    console.log(12345)
    mobileNav.classList.add('open-nav')
    open.classList.add('close-icon')
    close.classList.add('open-icon')
    mainContainer.style.display = 'none'
} 

function closeMobileNav() {
    console.log("Is closed") 
    open.classList.remove('close-icon') 
    close.classList.remove('open-icon')
    mobileNav.classList.remove('open-nav')
    mainContainer.style.display = 'flex'
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

// Smooth scroll
const scroll = new SmoothScroll('.smScroll[href*=#]', {
    speed: 800 
})

// Reveal elements on scroll 
window.addEventListener('scroll', revealElements); 

function revealElements(){
    var elements = document.querySelectorAll('.reveal')

    for( let i = 0; i < elements.length; i++){

        var windowHeight = window.innerHeight 
        var revealTop = elements[i].getBoundingClientRect().top 
        var revealPoint = 200

        if(revealTop < windowHeight - revealPoint){
            elements[i].classList.add('reveal-active')
        } else {
            elements[i].classList.remove('reveal-active')
        }
    }
}

