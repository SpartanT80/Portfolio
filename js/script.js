// =========================>>>   toogle
let menuIcon = document.querySelector('#menuIcon');
let navbar = document.querySelector('.navbar');
let readMoreBtn = document.querySelector('.btnReadMore');
let readLessBtn = document.querySelector('.btnReadLess');
let aboutReadMore = document.querySelector('.aboutReadMore');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};

readMoreBtn.onclick = () => {
    readMoreBtn.classList.add('displayNone');
    readLessBtn.classList.remove('displayNone');
    aboutReadMore.classList.remove('displayNone');
}
readLessBtn.onclick = () => {
    readMoreBtn.classList.remove('displayNone');
    readLessBtn.classList.add('displayNone');
    aboutReadMore.classList.add('displayNone');
}

// =========================>>>  scroll sections active link 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let heigth = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + heigth) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })

    // =========================>>>    sticky navbar

    // let header = document.querySelector('header');

    // header.classList.toggle('sticky', window.scrollY > 100);

    // =========================>>>   

    // =========================>>>   remove toggle icon and navbar when click navbar link

    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');
};

// ==============================>> toggle Read more button About section



