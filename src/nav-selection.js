const navSelection = (page) => {
    let homeListItem = document.getElementById('home-tab');
    let menuListItem = document.getElementById('menu-tab');
    let contactListItem = document.getElementById('contact-tab');

    switch (page) {
        case 'home':
            homeListItem.className = 'selected';
            menuListItem.className = '';
            contactListItem.className = '';
            break;
        case 'menu':
            homeListItem.className = '';
            menuListItem.className = 'selected';
            contactListItem.className = '';
            break;
        case 'contact':
            homeListItem.className = '';
            menuListItem.className = '';
            contactListItem.className = 'selected';
            break;
    }
};

export {navSelection};