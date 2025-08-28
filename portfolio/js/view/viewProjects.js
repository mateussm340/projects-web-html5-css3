import { listProjects } from '../data/dataList.js';

function showListProjectsOnScreen() {
    const elementListProjects = document.querySelector('#element-projects');

    listProjects.forEach((project, index) => {
        elementListProjects.innerHTML += `
            <li class="container__text">
                ${index + 1}. ${project}
            </li>
        `;
    });
}

showListProjectsOnScreen();