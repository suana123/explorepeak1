
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});
// Get the close button element
const closeButton = document.querySelector('.close-btn');

// Add click event listener to the close button
closeButton.addEventListener('click', () => {
  // Add fade-out effect
  closeButton.style.opacity = '0';

  // Hide the button after animation completes
  setTimeout(() => {
    closeButton.style.display = 'none';
  }, 300); // Adjust timing to match your animation duration
});

window.addEventListener('load', () => {
  window.addEventListener('scroll', () => {
      if(window.scrollY > 0){
          document.querySelector('.header').classList.add('active');
      } else {
          document.querySelector('.header').classList.remove('active');
      }
  });
});
