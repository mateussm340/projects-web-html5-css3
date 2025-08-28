import { listSocialNetwork } from "../data/dataList.js";

function showListSocialNetwork() {
    const elementSocialNetwork = document.querySelector('#element-social-network');

    listSocialNetwork.forEach((social) => {
        elementSocialNetwork.innerHTML += `
            <a href="${social.linkAcess}" target="_blank" class="model__horizontal model__center container__text">
                <img src="https://i.ibb.co/${social.logoLink}" alt="Logo - ${social.title}"/>
                <span>${social.title}</span>
            </a>
        `;
    });
}

showListSocialNetwork();