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


const navItem = document.querySelectorAll('.nav-item');
const home = document.getElementById('home');
const bio = document.getElementById('bio');
const article = document.getElementById('article');

navItem[0].addEventListener('click',() => {
    navItem[1].classList.remove('activ');
    navItem[2].classList.remove('activ');
    navItem[0].classList.toggle('activ');
    home.style.display='block';
    bio.style.display='none';
    article.style.display='none';
    navList.classList.remove('click');
    navSpan.classList.remove('click');
});

navItem[1].addEventListener('click',() => {
    navItem[0].classList.remove('activ');
    navItem[2].classList.remove('activ');
    navItem[1].classList.toggle('activ');
    home.style.display='none';
    bio.style.display='block';
    article.style.display='none';
    navList.classList.remove('click');
    navSpan.classList.remove('click');
});

navItem[2].addEventListener('click',() => {
    navItem[0].classList.remove('activ');
    navItem[1].classList.remove('activ');
    navItem[2].classList.toggle('activ');
    home.style.display='none';
    bio.style.display='none';
    article.style.display='block';
    navList.classList.remove('click');
    navSpan.classList.remove('click');
});