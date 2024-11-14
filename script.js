function toggleDropdown(menuId) {
    const dropdownMenu = document.getElementById(menuId);

    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        if (menu !== dropdownMenu) {
            menu.style.display = 'none';
        }
    });
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

document.getElementById('menuButton1').addEventListener('click', function() {
    toggleDropdown('dropdownMenu1');
});

document.getElementById('menuButton2').addEventListener('click', function() {
    toggleDropdown('dropdownMenu2');
});

document.getElementById('menuButton3').addEventListener('click', function() {
    toggleDropdown('dropdownMenu3');
});

document.getElementById('menuButton4').addEventListener('click', function() {
    toggleDropdown('dropdownMenu4');
});

document.getElementById('menuButton5').addEventListener('click', function() {
    toggleDropdown('dropdownMenu5');
});

document.getElementById('menuButton6').addEventListener('click', function() {
    toggleDropdown('dropdownMenu6');
});

document.getElementById('menuButton7').addEventListener('click', function() {
    toggleDropdown('dropdownMenu7');
});

window.onclick = function(event) {
    if (!event.target.matches('.menu-button')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
        });
    }
}