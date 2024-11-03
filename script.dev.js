"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.querySelector('.navbar');
  var searchForm = document.querySelector('.search-form');
  var menuBtn = document.querySelector('#menu-btn');
  var navCloseBtn = document.querySelector('#nav-close');
  var searchBtn = document.querySelector('#search-btn');
  var closeSearchBtn = document.querySelector('#close-search');
  menuBtn.addEventListener('click', function () {
    navbar.classList.toggle('active');
  });
  navCloseBtn.addEventListener('click', function () {
    navbar.classList.remove('active');
  });
  searchBtn.addEventListener('click', function () {
    searchForm.classList.add('active');
  });
  closeSearchBtn.addEventListener('click', function () {
    searchForm.classList.remove('active');
  });
  window.addEventListener('scroll', function () {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');

    if (window.scrolly > 0) {
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  });
});
var mySwiper = new Swiper('.home-slider', {
  autoplay: {
    delay: 7000
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  effect: 'fade',
  // Use fade effect
  fadeEffect: {
    crossFade: true
  }
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
var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true
}); // JavaScript code

var heading = document.getElementById('typing-heading');
var text = 'Discover the Worlds Greatest Peaks'; // Your desired text

var index = 0;

function type() {
  heading.textContent += text[index];
  index++;

  if (index === text.length) {
    index = 0; // Restart typing

    setTimeout(function () {
      heading.textContent = ''; // Clear after typing

      type(); // Restart typing
    }, 2000); // Delay before clearing

    return;
  }

  setTimeout(type, 100); // Typing speed
}

type(); // Start typing

var swiper = new Swiper(".product-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4
    }
  }
});
$(document).ready(function () {
  $('.dropdown').hover(function () {
    if ($(window).width() > 768) {
      // Check if window width is greater than 768px (desktop)
      $('#myDropdown').css('display', 'block');
    }
  }, function () {
    if ($(window).width() > 768) {
      // Check if window width is greater than 768px (desktop)
      $('#myDropdown').css('display', 'none');
    }
  });
  $('.dropdown').click(function () {
    if ($(window).width() <= 768) {
      // Check if window width is less than or equal to 768px (mobile)
      $('#myDropdown').slideToggle();
    }
  });
});
var count = localStorage.getItem('visitorCount') || 0; // Retrieve count from localStorage or set to 0 if null

function incrementCounter() {
  count++; // Increment count by 1

  document.getElementById('visitorCount').innerText = count; // Update count on the page

  localStorage.setItem('visitorCount', count); // Save count to localStorage
}

function resetCounter() {
  count = 0; // Reset count to 0

  document.getElementById('visitorCount').innerText = count; // Update count on the page

  localStorage.setItem('visitorCount', count); // Save count to localStorage
} // Function to execute when the page loads


window.onload = function () {
  incrementCounter(); // Increment count when the page loads
};

setInterval(updateDate, 1000);

function updateDate() {
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = months[today.getMonth()];
  var yyyy = today.getFullYear();
  var date = dd + '-' + mm + '-' + yyyy;
  document.getElementById('date').innerHTML = date;
}

setInterval(updateDate, 1000);
var slideIndex = 0;

function showSlides() {
  var slides = document.querySelectorAll('.slides video');

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.transform = "translateX(-".concat(slideIndex * 100, "%)");
  }

  slideIndex = (slideIndex + 1) % slides.length;
}

setInterval(showSlides, 3000); // Change slide every 3 seconds (adjust the timing as needed)