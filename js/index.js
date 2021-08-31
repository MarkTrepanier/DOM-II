// Your code goes here

//getters//
const body = document.querySelector('body');

const mainNav = document.querySelector('.main-navigation');
const navContainer = mainNav.querySelector('.nav-container');
const logoh1 = navContainer.querySelector('.logo-heading');
const nav = navContainer.querySelector('nav');

const containerHome = document.querySelector('.home');
const intro = document.querySelector('.intro');
const introimg = intro.querySelector('img');
const introh2 = intro.querySelector('h2');
const introtext = intro.querySelector('p');

//content section getters
const contentSection = containerHome.querySelector('.content-secttion');
// const contenth2 = contentSection.querySelector('.text-content h2');
// const contentimg = contentSection.querySelector('.img-content img');

//inverse getters
const inverseContent = containerHome.querySelector('.inverse-content');
const inverseimg = inverseContent.querySelector('.img-content img');
const inversetext = inverseContent.querySelector('.text-content');

//destination
const contentDestination = containerHome.querySelector('.content-destination');
const destination = contentDestination.querySelector('destination');
//const btn = destination:nth-of-type??

//testing
// introtext.textContent = 'can you read me';
// body.style.backgroundColor = 'red';  
// console.log('im noticed');


intro.addEventListener('mousedown', (event) => {
    console.log(event.target);
    if(event.target === introimg)
    {
    console.log('hit it');

    introimg.style.display = 'none';
    }
});

function kevent(event){
    if(event.key === 'a'){
        console.log('a was pressed');
    }
}
document.addEventListener('keydown',kevent);


function fade(event){
    event.target.style.opacity =+ event.deltaY
}
intro.addEventListener('wheel', fade)

logoh1.addEventListener('mouseover', function( event ) {
    event.target.style.color = "orange"
});