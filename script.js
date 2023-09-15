    const menu = document.querySelector('#menu-bar');
    const navbar = document.querySelector('.navbar');
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');
    const logoutButton = document.getElementById('logout');

    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    };

    dropdown.onclick = () => {
        dropdownContent.classList.toggle('show');
    };

    window.onscroll = () => {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    };
