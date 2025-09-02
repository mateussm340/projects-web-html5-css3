import { devicesList, itemsFooterList } from "./dataList.js";

function showDevicesListOnScreen() {
    const elementDevice = document.querySelector('#element-device');

    devicesList.forEach((device) => {
        elementDevice.innerHTML += `
            <li class="menu__item model__vertical model__center">
                <img src="images/icons/${device.imgLink}" alt="Icone - ${device.title}" class="container__image"/>
                <h2 class="container__subtitle">${device.title}</h2>
            </li>
        `;
    });
}

function showItemsFooterList() {
    const elementItemFooter = document.querySelector('#element-item-footer');

    itemsFooterList.forEach((itemFooter, index) => {
        elementItemFooter.innerHTML += `<li id="item-footer-${index}" class="container__text">${itemFooter}</li>`;
    });
}

showDevicesListOnScreen();
showItemsFooterList();