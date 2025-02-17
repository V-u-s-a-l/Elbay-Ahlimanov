const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scroll',window.scrollY)
})

const navSpan =document.querySelector('.nav-span');
const navList =document.querySelector('.nav-list');
navSpan.addEventListener('click',() => {
    navList.classList.toggle('click');
    navSpan.classList.toggle('click');
});

const glass =document.querySelector('.glass');
const magnifyingBox =document.querySelector('.magnifying-box');

glass.addEventListener('click', () => {
    magnifyingBox.classList.toggle('show')
})