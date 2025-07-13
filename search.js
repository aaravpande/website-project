// search.js
// Basic search bar functionality for demonstration

document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-bar');
    const addToCartButtons = document.querySelectorAll('.button');
    let cart = [];

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            alert('You searched for: ' + searchInput.value);
        });
    }

    addToCartButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const card = btn.closest('.card');
            const title = card.querySelector('.card-title').textContent;
            cart.push(title);
            // Update cart list in the DOM
            const cartList = document.getElementById('cartList');
            if (cartList) {
                cartList.innerHTML = '';
                cart.forEach(function(item) {
                    const li = document.createElement('li');
                    li.textContent = item;
                    cartList.appendChild(li);
                });
            }
        });
    });

    // Login form functionality
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (username && password) {
                alert('Logged in as: ' + username);
            } else {
                alert('Please enter both username and password.');
            }
        });
    }

    // Newsletter form functionality
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('newsletterEmail').value;
            if (email && email.endsWith('@gmail.com')) {
                alert('Subscribed with Gmail: ' + email);
            } else {
                alert('Please enter a valid Gmail address.');
            }
        });
    }

    // Contact form functionality
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const message = document.getElementById('contactMessage').value;
            if (name && email && message) {
                alert('Thank you, ' + name + '! Your message has been sent.');
                contactForm.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }
});
