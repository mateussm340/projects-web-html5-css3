const listProjects = [
    {
        id: 1, 
        imgLink: 'logo-portfolio.png',
        title: 'Projeto Portfolio',
        tagPaste: 'portfolio'
    },
    {
        id: 2, 
        imgLink: 'logo-technical-support.png',
        title: 'Suporte Técnico',
        tagPaste: 'technical-support'
    },
    {
        id: 3,
        imgLink: 'logo-web-books.png',
        title: 'Web Books',
        tagPaste: 'web-books'
    }
];

function showListProjectsOnScreen() {
    const elementProject = document.querySelector('#element-project');

    listProjects.forEach((project) => {
        elementProject.innerHTML += `
            <div class="project container__box model__vertical model__center">
                <img src="assets/${project.imgLink}" alt="Logo - ${project.title}"/>

                <h2 class="container__subtitle">${project.title}</h2>
                <a href="${project.tagPaste}/" target="_blank" class="container__button model__blue-color">
                    Acessar
                </a>
            </div>
        `;
    });
}

showListProjectsOnScreen();