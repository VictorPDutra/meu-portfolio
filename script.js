let links = document.querySelectorAll('.js-link');
let sections = document.querySelectorAll('.section');

let mobileMenu = document.querySelector('#hamburguer');
let navListMobile = document.querySelector('.nav-list');

function scrollSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    let topSection = section.offsetTop - 72;
    window.scrollTo({
        top: topSection,
        behavior: "smooth"
    })

    let navListMobile = document.querySelector('.nav-list');
    let largura = window.innerWidth;
    if (largura <= 960) {
        navListMobile.style.display = 'none'
    };

};

function clickMenuMobile() {
    
    if (navListMobile.style.display == 'none') {
        navListMobile.style.display = 'flex';
    } else {
        navListMobile.style.display = 'none';
    }
};


window.addEventListener('resize', () => {
    
    let larg = window.innerWidth;
    if (larg <= 960) {
        navListMobile.style.display = 'none';
    }else {
        navListMobile.style.display = 'flex';
    }
});

links.forEach(link => {
    link.addEventListener('click', scrollSection)
});

mobileMenu.addEventListener('click', clickMenuMobile);