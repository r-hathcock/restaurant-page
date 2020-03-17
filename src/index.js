import {loadHomePage} from './home-page-load';  
import {loadMenuPage} from './menu-page-load';
import {loadContactsPage} from './contacts-page-load';
import {navSelection} from './nav-selection';

loadHomePage();

const homeTab = document.getElementById('home-tab');
homeTab.addEventListener('click', function() {
    loadHomePage();

    let page = 'home';
    navSelection(page);
});
const menuTab = document.getElementById('menu-tab');
menuTab.addEventListener('click', function() {
    loadMenuPage();

    let page = 'menu';
    navSelection(page);
});
const contactsTab = document.getElementById('contact-tab');
contactsTab.addEventListener('click', function() {
    loadContactsPage();

    let page = 'contact';
    navSelection(page);
});
