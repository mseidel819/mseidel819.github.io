'use strict';

//const to doc select classes
const nav = document.querySelector('.nav');
const navLinks = document.querySelector('.nav-links');
const navItem = document.querySelector('.nav-item');
const navLink = document.querySelector('.nav-link');
const navLogo = document.querySelector('.nav-logo');
const navOpen = document.querySelector('.nav-open');
const btnMobile = document.querySelector('.btn-mobile-nav');

//mobile navigation
btnMobile.addEventListener('click', function () {
  nav.classList.toggle('nav-open');
});

//button scrolling
navLinks.addEventListener('click', function (e) {
  if (
    e.target.classList.contains('nav-link') &&
    !e.target.classList.contains('resume')
  ) {
    e.preventDefault();
    let id = e.target.getAttribute('href');

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    nav.classList.toggle('nav-open');
  }
});

//menu fade

//scroll slector for projects

//about selector buttons
const tabsContainer = document.querySelector('.about__tab-container');
const tabs = document.querySelectorAll('.information__tab');
const tabsContent = document.querySelectorAll('.information__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.information__tab');

  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('information__tab--active'));
  clicked.classList.add('information__tab--active');
  tabsContent.forEach(c => c.classList.remove('information__content--active'));
  document
    .querySelector(`.information__content--${clicked.dataset.tab}`)
    .classList.add('information__content--active');
});

/////////////////////////////////////////////////////////////////////////////////
function checkFlexGap() {
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();
/////////////////////////////////////////////////////////////////////////////////

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////
//MODAL WINDOW
//////////////////////////////////////////

const project1 = {
  img: 'img/pet_adopter.webp',
  title: 'Dog Finder',
  description:
    'The Dog-Finder app accesses the Petfinder API in order to search for adoptable dogs within 10 miles of an entered location. After selecting a dog, its info/details, as well as the organization caring for it, are rendered dynamically. This project also uses MVC architecture.',
  goal: "The goal of this project was to create a page from scratch based off of the skills learned from completing both 'The Complete JavaScript Course 2022: From Zero to Expert!', and 'Build Responsive Real-World Websites with HTML and CSS' on Udemy.com.",
  tech: 'HTML, CSS, JavaScript, Parcel.js',
  demo: 'https://seidelmatt.com/pet_adopter/',
  gitHub: 'https://github.com/mseidel819/pet_adopter',
};

const project2 = {
  img: 'img/portfolio.webp',
  title: 'My Portfolio',
  description:
    'This is a page designed from the ground-up to introduce myself and show my projects to potential employers.',
  goal: 'The educational goal for this page was to build a complete page that was mobile-respoinsive, used best practices, was aesthetically pleasing, and had a Lighthouse score above 95.',
  tech: 'HTML, CSS, JavaScript. The particle effect was shared by Vincent Garreau',
  demo: 'https://seidelmatt.com/',
  gitHub: 'https://github.com/mseidel819/mseidel819.github.io',
};

const project3 = {
  img: 'img/forkify.webp',
  title: 'Forkify App',
  description:
    "This was the capstone project from 'The Complete JavaScript Course 2022: From Zero to Expert!'. This project accesses a recipe API in order to search for and display recipes based on certain search criteria.",
  goal: 'To learn the ins-and-outs of creating a real-world JavaScript project, like accessing APIs, project planning, MVC architecture, pagination, accessing local storage, and error handling.',
  tech: "HTML and CSS were provided. The Javascript files were created as a part of 'The Complete JavaScript Course 2022: From Zero to Expert' on Udemy.com",
  demo: 'https://seidelmatt.com/forkify_app/',
  gitHub: 'https://github.com/mseidel819/forkify_app',
};

const project4 = {
  img: 'img/timer.webp',
  title: 'React Timer',
  description:
    'This is a timer that switches between a session countdown, and a break countdown. When each timer completes, a beep sounds, and the next timer begins.',
  goal: 'To create a simple application using ReactJS',
  tech: 'CSS, JavaScript, React, NPM',
  demo: 'https://seidelmatt.com/react-timer/',
  gitHub: 'https://github.com/mseidel819/react-timer',
};

const project5 = {
  img: 'img/bankistApp.webp',
  title: 'Bankist App',
  description:
    "This was a project from 'The Complete JavaScript Course 2022: From Zero to Expert!' on Udemy.com. This project allows a user to input a username and pin number in order to access their banking information. once logged in, you can request a deposit, withdrawal, or transfer from another users account.",
  goal: 'To learn about DOM manipulation, numbers, dates, internationalization, and setting timeouts.',
  tech: "HTML and CSS were provided. The Javascript files were created as a part of 'The Complete JavaScript Course 2022: From Zero to Expert' on Udemy.com",
  demo: 'https://seidelmatt.com/Bankist_App/',
  gitHub: 'https://github.com/mseidel819/Bankist_App',
};

const project6 = {
  img: 'img/calculator.webp',
  title: 'React Calculator',
  description:
    'This is your everyday, simple calculator. It passes all of the user stories required by the FreeCodeCamp "Front-end Libraries" certification.',
  goal: 'To create a simple application using ReactJS',
  tech: 'CSS, JavaScript, React',
  demo: 'https://seidelmatt.com/react-calculator/',
  gitHub: 'https://github.com/mseidel819/react-calculator',
};
// console.log(projectNav);

const hidden = document.querySelector('.hidden');
const popout = document.querySelector('.popout');
const overlay = document.querySelector('.overlay');
const project = document.querySelectorAll('.project');

const projectArr = [project1, project2, project3, project4, project5, project6];
let projectDisplay;
let closeBtn;
const openPopout = function (e) {
  const clicked = e.target.closest('.project');
  overlay.classList.remove('hidden');
  popout.classList.remove('hidden');

  projectDisplay = projectArr[clicked.dataset.project];

  clear();
  popout.insertAdjacentHTML('afterbegin', generateMarkup(projectDisplay));
  closeBtn = document.querySelector('.close-btn');
  // console.log(closeBtn);
  closeBtn.addEventListener('click', closePopout);
};
const closePopout = function () {
  overlay.classList.add('hidden');
  popout.classList.add('hidden');
};

project.forEach(p => p.addEventListener('click', openPopout));

overlay.addEventListener('click', closePopout);

const clear = function () {
  popout.innerHTML = '';
};

const generateMarkup = function (proj) {
  return `
  <div class='img-container'>
  <img class='popout-img' src='${proj.img}' alt= '${proj.title} details' />
  <button class='close-btn'> <ion-icon class='icon-mobile-pop' name="close-outline"></ion-icon></button>
  </div>
  <div class='popout-text'>
    <h2 class='popout-title'>${proj.title}</h2>
    <div class='popout-point'>
    <h3> Description</h3>
  <p>${proj.description}</p>
  </div>
  <div class='popout-point'>
  <h3>Goal</h3>
  <p>${proj.goal} </p>
  </div>
  <div class='popout-point'>
  <h3>Technologies used</h3>
  <p>${proj.tech}</p>
  </div>
  </div>
  <div class='popout-buttons'>

    <a href='${proj.demo}' target='_blank' rel="noopener" class='btn popout-btn'>View Demo</a>
    <a href='${proj.gitHub}' class='btn popout-btn'>View Github</a>
  </div>`;
};

// popout.insertAdjacentHTML('afterbegin', generateMarkup());
