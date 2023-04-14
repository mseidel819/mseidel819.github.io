'use strict';
import { projectData, skillsArr, softSkillsArr } from './project-data';
import { auth, authURL } from './config.js';

//adding skills
const techSkillContainer = document.querySelector('.tech-skills-container');
const softSkillContainer = document.querySelector('.soft-skills-container');

skillsArr.forEach(skill => {
  techSkillContainer.insertAdjacentHTML(
    'beforeend',
    `
<p class="header-2 tech-skill-item">${skill.toUpperCase()}</p>
`
  );
});

softSkillsArr.forEach(skill => {
  softSkillContainer.insertAdjacentHTML(
    'beforeend',
    `
  <p class="header-2 soft-skill-item">${skill.toUpperCase()}</p>
  `
  );
});

//adding projects
const projectsContainer = document.querySelector('.projects-container');

projectData.forEach(project => {
  projectsContainer.insertAdjacentHTML(
    'beforeend',
    `
    <div class="project-clump">
    <div class='img-div'>
   <img class="project-img" src="${project.img}" alt=""/> 
   </div>
    <div class="project-hover-area">
    ${
      project.gitHub
        ? `<a target="_blank" class="btn" href="${project.demo}">View Project</a> <a target="_blank"  class="btn" href="${project.gitHub}">View Code</a>`
        : `<a target="_blank"  class="btn" href="${project.demo}">View Project</a>`
    }
  
  
        </div>
        <h3 class="header-3">${project.title}</h3>
        <div class="tech-container">
            ${project.tech
              .map(item => `<p class="body-1 tech-item">${item}</p>`)
              .join('')}
        </div>
    </div>
    `
  );
});

const inputs = document.querySelectorAll('.input');
const errorContainer = document.querySelectorAll('.error-text-container');
const contactForm = document.getElementById('contact-form');
const submitButton = document.getElementById('submit');

//contact form
const myHeaders = new Headers();
myHeaders.append('Authorization', `Bearer ${auth}`);
myHeaders.append('Content-Type', 'application/json');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var data = {
    fields: {
      Name: document.getElementById('Name').value,
      Email: document.getElementById('Email').value,
      Message: document.getElementById('Message').value,
      Status: 'To do',
    },
  };
  const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch(`${authURL}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log('Form Submitted'))
    .catch(error => console.log('error', error));

  document.getElementById('Name').value = '';
  document.getElementById('Email').value = '';
  document.getElementById('Message').value = '';

  submitButton.innerText = 'Message Sent!';

  submitButton.style.background = 'var(--c-green)';
  submitButton.style.color = 'var(--c-black)';

  setTimeout(() => {
    submitButton.innerText = 'Send Message';
    submitButton.style.background = 'transparent';
    submitButton.style.color = 'var(--c-white)';
  }, 3000);
});

//error state
submitButton.addEventListener('click', e => {
  inputs.forEach((input, i) => {
    if (!input.checkValidity()) {
      errorContainer[i].innerHTML = '';
      input.style.borderBottom = 'var(--border-height) solid var(--c-error)';
      errorContainer[i].insertAdjacentHTML(
        'afterbegin',
        `
      <p class="body-1 error-text">Sorry, invalid format here</p>
      `
      );
    } else {
      input.style.borderBottom = 'var(--border-height) solid var(--c-green)';
      errorContainer[i].innerHTML = '';
    }
  });
});

//smooth scroll
const button = document.querySelectorAll('.btn-link');

button.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    let id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

//img lazy load
