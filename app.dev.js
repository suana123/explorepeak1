"use strict";

var sign_in_btn = document.querySelector("#sign-in-btn");
var sign_up_btn = document.querySelector("#sign-up-btn");
var container = document.querySelector(".container");
sign_up_btn.addEventListener('click', function () {
  container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener('click', function () {
  container.classList.remove("sign-up-mode");
}); // Get the close button element

var closeButton = document.querySelector('.close-btn'); // Add click event listener to the close button

closeButton.addEventListener('click', function () {
  // Add fade-out effect
  closeButton.style.opacity = '0'; // Hide the button after animation completes

  setTimeout(function () {
    closeButton.style.display = 'none';
  }, 300); // Adjust timing to match your animation duration
});
window.addEventListener('load', function () {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  });
});