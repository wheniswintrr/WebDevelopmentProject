// Dropdown function
function toggleDropdown() {
  const dropdownContent = document.querySelector(".dropdown-content");
  dropdownContent.classList.toggle("show");
}

// Close dropdown when clicking outside
window.onclick = function (event) {
  const dropdownContent = document.querySelector('.dropdown-content');
  const dropbtn = document.querySelector('.dropbtn');
  const contrastButton = document.querySelector('.toggle-contrast-btn');

  // Close the dropdown if clicking outside of the button or the dropdown itself
  if (!event.target.matches('.dropbtn') && !event.target.matches('.toggle-contrast-btn') && !event.target.closest('.dropdown-content')) {
    dropdownContent.classList.remove('show');
  }
};

// Open theme from localStorage
let isHighContrast = localStorage.getItem("theme") === "high-contrast";

// Function to apply the theme
const applyTheme = () => {
  const root = document.documentElement;

  if (isHighContrast) {
    // Apply high-contrast theme
    root.classList.add("high-contrast");
  } else {
    // Apply default theme
    root.classList.remove("high-contrast");
  }
};

// Toggle the theme between default and high-contrast
const toggleContrast = () => {
  isHighContrast = !isHighContrast;
  applyTheme();

  // Store the theme preference in localStorage
  localStorage.setItem("theme", isHighContrast ? "high-contrast" : "default");

  // Update the button text after toggling
  const contrastButton = document.querySelector('.toggle-contrast-btn');
  contrastButton.innerText = isHighContrast ? 'Light Theme' : 'Dark Theme';
};

// Button toggle
const contrastButton = document.querySelector('.toggle-contrast-btn');
if (contrastButton) {
  contrastButton.addEventListener('click', toggleContrast);
}

// Apply theme on page load
window.addEventListener('DOMContentLoaded', () => {
  // Apply theme based on localStorage
  applyTheme();

  // Update button text 
  if (contrastButton) {
    contrastButton.innerText = isHighContrast ? 'Light Theme' : 'Dark Theme';
  }
});

// Array for YouTube embed links with no-cookie domain
const videoSuggestions = [
  "https://www.youtube-nocookie.com/embed/wQMs2-DX0Os?si=b52n0mBHSMYIRJZi",
  "https://www.youtube-nocookie.com/embed/J8g3JKobvnk?si=iEkgsVT_HcWkKmC7",
  "https://www.youtube-nocookie.com/embed/zUATd5Lbo-w?si=On-MrlyzgFPWWxg6",
];

const videoFrame = document.getElementById('video-frame');

// Function to rotate videos
let currentVideoIndex = 0;

function rotateVideos() {
  videoFrame.src = videoSuggestions[currentVideoIndex];
  currentVideoIndex = (currentVideoIndex + 1) % videoSuggestions.length;
}

// Video Rotates Every 4 seconds (4000ms)
setInterval(rotateVideos, 4000);