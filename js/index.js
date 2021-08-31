// Your code goes here

//getters//
const body = document.querySelector('body');

const mainNav = document.querySelector('.main-navigation');
const navContainer = mainNav.document.querySelector('.nav-container');
const logoh1 = navContainer.querySelector('.logo-heading');
const nav = navContainer.querySelector('nav');

const containerHome = document.querySelector('.home');
const intro = containerHome.querySelector('.intro');
const introimg = intro.querySelector('img');
const introh2 = intro.querySelector('h2');
const introtext = intro.querySelector('p');
//content section getters
const contentSection = containerHome.querySelector('.content-secttion');
const copntentText = contentSection.querySelector('.text-content');//has h2 and 2 p
const imgContent = containerHome.querySelector('.img-content img');//direct to img

//inverse getters
const inverseContent = containerHome.querySelector('.inverse-content');
const inverseimg = inverseContent.querySelector('.img-content img');
const inversetext = inverseContent.querySelector('.text-content');