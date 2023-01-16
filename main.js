'use strict';
//navbar 를 투명 & 엘로우
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    // console.log(`window.scrollY: ${window.scrollY}`);
    // console.log(`navbarHeight: ${navbarHeight}`);

    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar-dark');
    } else {
        navbar.classList.remove('navbar-dark')
    }
})

//Handle scrolling when tapping on the navbar menu
//section선택하면 그 위치로 이동!
const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    // console.log(event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({ behavior: 'smooth'});
});

//Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home_contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});

//make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home_container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    // console.log(homeHeight)
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

//Show "arrow up" button when scrolling down
const arrowUp = document.querySelector(".arrow-up")
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible')
    }
});

//Handle Click on the "arrow up" button
arrowUp.addEventListener('click', (event) => {
    scrollIntoView('#home')
    
})

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth'});
}
