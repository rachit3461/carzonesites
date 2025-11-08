 // Responsive navbar
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Fade-in effect
window.addEventListener("load", () => {
  const content = document.querySelector(".home-content");
  content.style.opacity = "0";
  content.style.transition = "opacity 1.5s ease";
  setTimeout(() => {
    content.style.opacity = "1";
  }, 300);
});

  // Learn More buttons for Car Models
document.querySelectorAll('.learn-btn').forEach(button => {
  button.addEventListener('click', () => {
    alert('More details about this car coming soon! 🚗💨');
  });
});


// Service buttons alert
document.querySelectorAll('.service-btn').forEach(button => {
  button.addEventListener('click', () => {
    alert('More information about this service coming soon! 🚗🛠️');
  });
});


// Engine sound system
document.querySelectorAll('.engine-card').forEach(card => {
  const button = card.querySelector('.engine-btn');
  const soundUrl = button.getAttribute('data-sound');
  const audio = new Audio(`${soundUrl}?v=${Date.now()}`); // cache bypass
  let isPlaying = false;

  button.addEventListener('click', () => {
    if (!isPlaying) {
      audio.play();
      isPlaying = true;
      button.textContent = "Stop Sound";
    } else {
      audio.pause();
      audio.currentTime = 0;
      isPlaying = false;
      button.textContent = "Play Sound";
    }
  });
});

document.querySelector('.about-btn').addEventListener('click', () => {
  alert("You can contact Rachit at: rachit@carzone.com 🚗📩");
});

// Footer fade-in animation on scroll
const footer = document.getElementById("footer");
window.addEventListener("scroll", () => {
  const footerPosition = footer.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;
  if (footerPosition < screenHeight - 100) {
    footer.classList.add("visible");
  }
});
