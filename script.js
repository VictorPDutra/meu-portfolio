let links = document.querySelectorAll('.js-link');
let sections = document.querySelectorAll('.section');

let mobileMenu = document.querySelector('#hamburguer');
let navListMobile = document.querySelector('.nav-list');


links.forEach((link) => {
    link.addEventListener('click', (event) => {
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
        if (largura <= 660) {
            navListMobile.style.display = 'none'
        }
    
    });
});


mobileMenu.addEventListener('click', () => {
    
    if (navListMobile.style.display == 'none') {
        navListMobile.style.display = 'flex';
    } else {
        navListMobile.style.display = 'none';
    }
});


window.addEventListener('resize', () => {
    
    let larg = window.innerWidth;

    if (larg <= 660) {
        navListMobile.style.display = 'none';
    }else {
        navListMobile.style.display = 'flex';
    }
});
