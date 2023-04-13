'use strict';
import { projectData, skillsArr, softSkillsArr } from './project-data';

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

const projectsContainer = document.querySelector('.projects-container');

projectData.forEach(project => {
  projectsContainer.insertAdjacentHTML(
    'beforeend',
    `
    <div class="project-clump">
        <img class="project-img" src="" alt=""/>
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
