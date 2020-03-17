import {clearPage} from './clear-page';

const loadContactsPage = () => {
    clearPage();

    // create elements, and append to main content container
    const mainNode = document.getElementById('content');
    let contactTitle = document.createElement('h1');
    contactTitle.innerText = 'Contact Us';

    mainNode.appendChild(contactTitle);
    
};

export {loadContactsPage};