let links = document.querySelectorAll('.js-link');
let sections = document.querySelectorAll('.section');

function scrollSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href)
    let topSection = section.offsetTop -72;
    window.scrollTo({
        top: topSection,
        behavior: "smooth"
    })
}

links.forEach(link => {
    link.addEventListener('click', scrollSection)
});

