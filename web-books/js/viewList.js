import { 
    listMenuOption, listTitleFooter, listTopics, listBooks
 } from './dataList.js';

function showListMenuOption() {
    const totalElement = 2;
    let elementMenuOption = document;

    for (let i = 1; i <= totalElement; i++) {
        elementMenuOption = document.querySelector(`#element-menu-option-${i}`);

        listMenuOption.forEach((menuOption) => {
            elementMenuOption.innerHTML += `
                <li class="menu__item">
                    <a href="#" class="container__link">
                        ${menuOption}
                    </a>
                </li>
            `;
        });
    }
}

function showItemsListCompanies() {
    const elemenListCompanies = document.querySelector('#element-list-companies');

    listTitleFooter.forEach((titleFooter, index) => {
        elemenListCompanies.innerHTML += `
            <ul class="menu__list model__vertical model__start">
                <li class="menu__title">${titleFooter}</li>   
                <div class="model__vertical" id="element-number-random-${index + 1}"></div>
            </ul>
        `;

        showNumbersRandomInItemRodape(index + 1);
    });
}

function showNumbersRandomInItemRodape(indexIdElement) {
    const numberMin = 2;
    const numberMax = 9;
    const numberQuantity = 5;
    
    let listColors = ['#023f91', '#2e2e2e', '#ff4500', '#ec0505', '#0e6e0e']
    let listNumbers = [];
    let numberRandom;

    const randomShuffleListColors = listColors.sort(() => Math.random() - 0.5);
    const elementNumberRandom = document.querySelector(`#element-number-random-${indexIdElement}`);

    for (let i = numberMin; i <= numberQuantity; i++) {

        numberRandom = getNumberRandom(numberMax, numberMin);

        while (listNumbers.includes(numberRandom)) {
            numberRandom = getNumberRandom(numberMax, numberMin);
        }

        elementNumberRandom.innerHTML += `
            <li class="menu__item model__horizontal model__center">
                <div class="container__box" style="background-color: ${randomShuffleListColors[i]}">A${numberRandom}</div>
                <span class="container__text">Empresa ${numberRandom}ABX-${i}</span>
            </li>
        `;

        listNumbers.push(numberRandom);
    }
}

function getNumberRandom(numberMax, numberMin) {
    return parseInt(Math.random() * (numberMax - numberMin + 1) + numberMin);
}

function showItemsTopic() {
    const elementTopic = document.querySelector('#element-topic');

    listTopics.forEach((itemTopic, index) => {
        elementTopic.innerHTML += `
            <li class="menu__item model__orange-color" id="topic-${index}">${itemTopic}</li>
        `;
    });
}

function showListBooks() {
    const minLimit = 1;
    const maxLimit = 2;
    let elementListBooks = document;
    let searchNameImage = 'nenhum.png';

    for (let i = minLimit; i <= maxLimit; i++) {
        elementListBooks = document.querySelector(`#element-list-books-${i}`);

        listBooks.forEach((book) => {
            searchNameImage = book.split('.')[0];

            elementListBooks.innerHTML += `
                <div class="swiper-slide">
                    <img src="images/books/livro-${book}" alt="Livro - ${searchNameImage}"/>
                </div>
            `;
        });
    }
}

showListMenuOption();
showItemsListCompanies();
showItemsTopic();
showListBooks();