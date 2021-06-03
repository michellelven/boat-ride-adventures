// Re-creating the hamburger menu using JavaScript //
const hamburger =  document.querySelector('.hamburger');
const navBurger = document.querySelector('.ul-burger');

hamburger.addEventListener('click', function(event) {
    event.preventDefault();
    navBurger.classList.toggle('active');
});

// Some JS to handle form submission and error handling on both the Blog and Contact Pages//

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = document.querySelector('input[type=text]');
    const emailInput = document.querySelector('input[type=email]');
    const textareaInput = document.querySelector('textarea');

    const userName = nameInput.value;
    const userEmail = emailInput.value;
    const userComment = textareaInput.value;

    if (userName === "") {
        nameInput.classList.add('invalid');
    } else {
        nameInput.classList.remove('invalid');
    }
    if (userEmail === "" || userEmail.indexOf('@') === -1) {
        emailInput.classList.add("invalid");
    } else {
        emailInput.classList.remove("invalid");
    }
    if (userComment === "") {
        textareaInput.classList.add("invalid");
    } else {
        textareaInput.classList.remove("invalid");
    }
});

// There is a better way to accomplish the above with less code, converting the input data into an array, and using a for loop to do this error handling. I ran out of time, but will try to implement this in the future.

