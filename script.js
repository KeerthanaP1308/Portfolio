let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menu.onclick = (e) => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const carousel = document.querySelector('.carousel');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

rightBtn.addEventListener('click', () => {
  carousel.scrollLeft += 200;
});

leftBtn.addEventListener('click', () => {
  carousel.scrollLeft -= 200;
});
