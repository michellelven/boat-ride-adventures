// Re-creating the hamburger menu using JavaScript //
const hamburger =  document.querySelector('.hamburger');
const navBurger = document.querySelector('.ul-burger');

hamburger.addEventListener('click', function(event) {
    event.preventDefault();
    navBurger.classList.toggle('active');
});

