const footer = document.querySelector('footer')
let clic = 1
const navbar = document.getElementById('navbarHeader')
const card2 = document.querySelectorAll("div.col-md-4")[1];
const btnEdit2 = document.querySelectorAll('button.btn-outline-secondary')[1];
const bugerMenu = document.querySelector("button.navbar-toggler");
const card1 = document.querySelectorAll("div.col-md-4")[0];
const btnEdit1 = document.querySelectorAll('button.btn-outline-secondary')[0];
const navbar1 = document.querySelector('div.navbar');
const bootstrap = document.querySelector('link');
const navbar2 = document.querySelector('main');


footer.addEventListener("click", function() {
    console.log('clic n°' + clic++);
});

navbar.addEventListener("click", function() {
    navbar.classList.toggle('collapse')
});

bugerMenu.addEventListener("click", function() {
    navbar.classList.toggle('collapse');
});


btnEdit1.addEventListener('click', function() {
    card1.style.color = "red";
});


btnEdit2.addEventListener('click', function() {
    if (card2.style.color === 'green') {
        card2.style.color = 'black';
    } else { card2.style.color = "green"; }
});


navbar1.addEventListener('dblclick', hideNavbar);
navbar2.addEventListener('dblclick', showNavbar);

function hideNavbar() {
    bootstrap.setAttribute('disabled', 'disabled');
}

function showNavbar() {
    bootstrap.removeAttribute("disabled");
}