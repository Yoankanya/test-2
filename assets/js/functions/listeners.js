var menu = document.getElementById("menu")
var iconMenu = document.querySelector('.header-top-left .header-icon')
var listes = document.querySelectorAll('.header-left ul li')

//Objet contenant les gestionnaires d'événements
var listenerFunctions = {
    openMenu: (event) => {
        menu.style.display = 'block'
    },
    closeMenu: (event) => {
        menu.style.display = 'none'
    }
}


//Fonction qui réalise les abonnements
var setupListeners = () => {
    iconMenu.addEventListener('mouseover', listenerFunctions.openMenu)
    // iconMenu.onmouseover = listenerFunctions.manageNav
    menu.addEventListener('mouseleave', listenerFunctions.closeMenu)
    for (let index = 0; index < listes.length; index++) {
        const li = listes[index];
        li.addEventListener('click', listenerFunctions.closeMenu)
    }
}