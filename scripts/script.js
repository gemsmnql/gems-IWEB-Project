const hammenu = document.querySelector('.ham-menu');

const offscreenMenu = document.querySelector('.off-screen-menu');

const filter = document.querySelector('.filter');

const filsec = document.querySelector('.filter-section')

hammenu.addEventListener('click', () => {
    hammenu.classList.toggle('active');
    offscreenMenu.classList.toggle('active');
} )

filter.addEventListener('click', () => {
    filsec.classList.toggle('active');
} )

function ham() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function fil() {
    var fil = document.getElementsByClassName("filter-section");
    if (fil.style.display === "block" && logo.style.display === "none") {
        fil.style.display = "none";
    } else {
        fil.style.display = "block";
    }
}