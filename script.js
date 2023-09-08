document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        if (email === 'nakku@gmail.com' && password === 'n') {

            window.location.href = '../landingpage/landing.html';
        } else if (email === 'admin@gmail.com' && password === 'admin') {

            window.location.href = '../landingpage/landing.html';
        }
        else {
            alert('Invalid username or password. Please try again.');
        }
    });
});
