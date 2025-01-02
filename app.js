let items = document.querySelectorAll('.slider .list .item');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let lastPosition = items.length - 1;
let firstPosition = 0;
let active = 0;

nextBtn.onclick = () => {
    active = active + 1;
    setSlider();
}
prevBtn.onclick = () => {
    active = active - 1;
    setSlider();
}
const setSlider = () => {
    let oldActive = document.querySelector('.slider .list .item.active');
    if(oldActive) oldActive.classList.remove('active');
    items[active].classList.add('active');
    // 
    nextBtn.classList.remove('d-none');
    prevBtn.classList.remove('d-none');
    if(active == lastPosition) nextBtn.classList.add('d-none');
    if(active == firstPosition) prevBtn.classList.add('d-none');
}
setSlider();

// set diameter
const setDiameter = () => {
    let slider = document.querySelector('.slider');
    let widthSlider = slider.offsetWidth;
    let heightSlider = slider.offsetHeight;
    let diameter = Math.sqrt(Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2));
    document.documentElement.style.setProperty('--diameter', diameter+'px');
}
setDiameter();
window.addEventListener('resize', () => {
    setDiameter();
})



// NAVBAR
document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("navbar");
    const logoImage = document.getElementById("logo-image");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            header.classList.remove("transparent");
            header.classList.add("scrolled");
            logoImage.src = "img/logo7.png"; // Use correct relative path
        } else {
            header.classList.remove("scrolled");
            header.classList.add("transparent");
            logoImage.src = "img/logo7.png"; // Use correct relative path
        }
    });
});



// TECH
// Get the video element
// const video = document.getElementById('background-video');

// Slow down the video (set playback rate to 0.5 for half speed)
// video.playbackRate = 0.5;

const video = document.getElementById('background-video');

video.addEventListener('ended', () => {
    video.currentTime = 0; // Restart the video
    video.play(); // Ensure playback starts again
});




// NAVBAR
const menuButton = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");
const menuIcon = document.getElementById("menu-icon");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Toggle between hamburger and close icons
    if (navLinks.classList.contains("active")) {
        menuIcon.innerHTML = `<path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />`;
    } else {
        menuIcon.innerHTML = `<path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />`;
    }
});


// 
