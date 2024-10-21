window.addEventListener('load', () => {
    document.getElementById('loading-screen').style.display = 'none';
    document.body.classList.add('loaded');
    alert("EmpowerHer : 'Everybody deserves equality & dignity... '");
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

navLinks.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    });
});


const element = document.getElementById('body');

let opacity = 0;

const intervalId = setInterval(() => {
    opacity += 0.1;
    element.style.opacity = opacity;
    if (opacity >= 1) {
        clearInterval(intervalId);
    }
}, 50);

function isInViewport(element, offset = 100) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= -offset &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

    scrollRevealElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('show');
        }
    });
}

window.addEventListener('scroll', handleScroll);

handleScroll();


const readMoreLinks = document.querySelectorAll('.read-more');

readMoreLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);

        if (targetContent.style.display === 'none') {
            targetContent.style.display = 'block';
            this.textContent = 'Read Less';
        } else {
            targetContent.style.display = 'none';
            this.textContent = 'Read More';
        }
    });
});

const backToTopButton = document.querySelector('.back-to-top');

backToTopButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('reportSubmitted')) {
    alert("Thank you for your report. We will reach out as soon as possible.");
    window.location.href = 'index.html';

}

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.pageYOffset;

        if (scrollPosition >= sectionTop - sectionHeight / 3 &&
            scrollPosition < sectionTop + sectionHeight) {

            const sectionId = section.getAttribute('id');

            navLinks.forEach(link => {
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
});