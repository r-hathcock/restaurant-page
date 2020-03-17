import {clearPage} from './clear-page';

const loadMenuPage = () => {
    clearPage();

    // create elements, and append to main content container
    const mainNode = document.getElementById('content');
    let menuTitle = document.createElement('h1');
    let menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu-container');
    menuTitle.innerText = 'Menu';

    let beerDiv = document.createElement('div');
    let beerImg = document.createElement('img');
    let beerText = document.createElement('h2');
    beerImg.src = 'https://i.imgur.com/2YkVR8V.jpg';
    beerImg.setAttribute('height', '300px');
    beerImg.setAttribute('width', '300px');
    beerText.innerText = 'Brew';
    beerDiv.appendChild(beerImg);
    beerDiv.appendChild(beerText);

    let drinksDiv = document.createElement('div');
    let drinksImg = document.createElement('img');
    let drinksText = document.createElement('h2');
    drinksImg.src = 'https://i.imgur.com/AeQDxXQ.jpg';
    drinksImg.setAttribute('height', '300px');
    drinksImg.setAttribute('width', '300px');
    drinksText.innerText = 'Cocktails';
    drinksDiv.appendChild(drinksImg);
    drinksDiv.appendChild(drinksText);

    let foodDiv = document.createElement('div');
    let foodImg = document.createElement('img');
    let foodText = document.createElement('h2');
    foodImg.src = 'https://i.imgur.com/f8JW2B0.jpg';
    foodImg.setAttribute('height', '300px');
    foodImg.setAttribute('width', '300px');
    foodText.innerText = 'Food';
    foodDiv.appendChild(foodImg);
    foodDiv.appendChild(foodText);

    menuContainer.appendChild(beerDiv);
    menuContainer.appendChild(drinksDiv);
    menuContainer.appendChild(foodDiv);
    mainNode.appendChild(menuTitle);
    mainNode.appendChild(menuContainer);
};

export {loadMenuPage};