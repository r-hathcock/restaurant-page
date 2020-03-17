import {clearPage} from './clear-page';

// clears current html, creates elements, and appends to main content container
const loadContactsPage = () => {
    clearPage();

    const mainNode = document.getElementById('content');
    let contactDiv = document.createElement('div');
    let contactAddress1 = document.createElement('h2');
    let contactAddress2 = document.createElement('h2');
    let contactPhone = document.createElement('h2');
    let contactEmail = document.createElement('h2');
    let contactTitle = document.createElement('h1');
    let personalLogo = document.createElement('img');

    contactTitle.innerText = 'Contact Us';
    contactDiv.style.padding = '50px';

    contactAddress1.innerText = '123 Module Ave.';
    contactAddress2.innerText = 'Javascript, CA. 98765';
    contactPhone.innerText = '(111)011-0110';
    contactEmail.innerText = 'tapthatgastropub@email.com';

    personalLogo.setAttribute('src', 'https://i.imgur.com/23Gpi4k.png');
    personalLogo.style.width = '200px';
    personalLogo.style.height = '200px';
    personalLogo.style.padding = '30px';

    contactDiv.appendChild(contactAddress1);
    contactDiv.appendChild(contactAddress2);
    contactDiv.appendChild(contactPhone);
    contactDiv.appendChild(contactEmail);
    mainNode.appendChild(contactTitle);
    mainNode.appendChild(contactDiv);
    mainNode.appendChild(personalLogo);
};

export {loadContactsPage};