document.addEventListener('DOMContentLoaded', function () {

    let dropdownButtons = document.querySelectorAll('.dropdown-button');

    dropdownButtons.forEach(function (dropdownButton) {
        dropdownButton.addEventListener('click', function (event) {
            let caret = event.target.querySelector('.caret');
            let dropdownMenu = event.target.nextElementSibling;
            // show the menu
            showMenu(caret, dropdownMenu);
            // hide the menu
            hideMenu(dropdownButton, caret, dropdownMenu);
        });
    });

    function showMenu(caret, dropdownMenu) {
        dropdownMenu.classList.toggle('showMenu');
        caret.classList.toggle('active');
    }

    function hideMenu(dropdownButton, caret, dropdownMenu) {
        document.addEventListener('click', function (event) {
            if (event.target !== dropdownButton && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.remove('showMenu');
                caret.classList.remove('active');
            }
        });
    }

});