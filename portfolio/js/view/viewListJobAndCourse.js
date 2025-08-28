import { listJob, listCourse } from "../data/dataList.js";

function showListJob() {
    const elementListJob = document.querySelector('#element-list-job');

    listJob.forEach((job) => {
        elementListJob.innerHTML += `
            <li class="container__text" id="job-${job.id}">
                ${job.enterprise}
                <span class="container__emphasis">(${job.dateRange})</span> - 
                ${job.description}.
            </li>
        `;
    });
}

function showListCourse() {
    const elementListCourse = document.querySelector('#element-list-course');

    listCourse.forEach((course) => {
        elementListCourse.innerHTML += `
            <li class="container__text" id="course-${course.id}">
                ${course.course} - ${course.institution} 
                <a href="${course.certificateLink}" target="_blank" class="container__link container__emphasis">
                    com certificado
                </a>
            </li>
        `;
    }); 
}

showListJob();
showListCourse();