import {clearPage} from './clear-page';

const loadHomePage = () => {
    clearPage();

    // create elements, and append to main content container
    const mainNode = document.getElementById("content");
    let homeContentContainer = document.createElement('div');
    let mainImg = document.createElement('img');
    let mainHeader = document.createElement('h1');
    let mainP = document.createElement('p');

    mainHeader.innerText = "Tap That Gastropub";
    mainP.innerText = "Where the drinks are cold and the vibe is warm";
    mainImg.src = 'https://i.imgur.com/CXEUGud.png';
    
    homeContentContainer.appendChild(mainHeader);
    homeContentContainer.appendChild(mainP);
    homeContentContainer.appendChild(mainImg);
    mainNode.appendChild(homeContentContainer);
};

export {loadHomePage};


