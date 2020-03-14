import {loadHomePage} from './home-page-load';  
import {loadMenuPage} from './menu-page-load';
import {loadContactsPage} from './contacts-page-load';

loadHomePage();

const homeTab = document.getElementById('home-tab');
homeTab.addEventListener('click', function() {
    loadHomePage();
});
const menuTab = document.getElementById('menu-tab');
menuTab.addEventListener('click', function() {
    loadMenuPage();
});
const contactsTab = document.getElementById('contacts-tab');
contactsTab.addEventListener('click', function() {
    loadContactsPage();
});
