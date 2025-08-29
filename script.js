// Select the Navbar heart count
const navbarHeartCount = document.getElementById('heart-count');

// Select all heart icons in cards
const heartIcons = document.querySelectorAll('.heart-icon');

// Start count from the number already in Navbar
let count = parseInt(navbarHeartCount.textContent) || 0;

// Add click event for each heart icon
heartIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        count++;
        navbarHeartCount.textContent = count;
        icon.classList.add('text-red-500'); // turn heart red
    });
});
