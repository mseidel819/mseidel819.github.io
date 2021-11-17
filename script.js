'use strict';

//const to doc select classes
const nav = document.querySelector('.nav');
const navLinks = document.querySelector('.nav-links');
const navItem = document.querySelector('.nav-item');
const navLink = document.querySelector('.nav-link');
//button scrolling

navLinks.addEventListener('click', function (e) {
  e.preventDefault();

  //matching strategy
  if (e.target.classList.contains('nav-link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//menu fade

//scroll slector for projects
