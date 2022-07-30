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