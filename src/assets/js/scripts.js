// Select the chevron icons, menu and cross icons, and the body element
const chevronLeft = document.getElementById('chevron-left');
const chevronRight = document.getElementById('chevron-right');
const menuIcon = document.getElementById('menu-icon');
const crossIcon = document.getElementById('cross-icon');
const body = document.body;

// Array of background images
const backgroundImages = [
    'assets/images/image_project_1.png', // First image
    'assets/images/image_project_2.png', // Second image
    'assets/images/image_project_3.png'  // Third image
];

let currentImageIndex = 0;

// Function to update the background image
function updateBackgroundImage() {
    body.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
}

// Function to activate the menu
function activateMenu() {
    // Add the "menu-active" class to the body
    body.classList.add('menu-active');

    // Hide the menu icon and show the cross icon
    menuIcon.style.display = 'none';
    crossIcon.style.display = 'block';

    // Remove the background image and set a white background
    body.style.backgroundImage = 'none';
    body.style.backgroundColor = '#ffffff'; // Set white background

    // Hide main content and chevrons
    const main = document.querySelector('main');
    const chevronNavigation = document.querySelector('.chevron-navigation');
    if (main) main.style.display = 'none';
    if (chevronNavigation) chevronNavigation.style.display = 'none';

    // Create a container for the section names
    const menuSections = document.createElement('div');
    menuSections.classList.add('menu-sections');

    // Add section names dynamically
    const sections = ['Home', 'About Us', 'Projects', 'Contact']; // Replace with your actual sections
    sections.forEach((section) => {
        const sectionElement = document.createElement('div');
        sectionElement.textContent = section;
        menuSections.appendChild(sectionElement);
    });

    // Append the container to the body
    body.appendChild(menuSections);
}

// Function to deactivate the menu
function deactivateMenu() {
    // Remove the "menu-active" class from the body
    body.classList.remove('menu-active');

    // Show the menu icon and hide the cross icon
    menuIcon.style.display = 'block';
    crossIcon.style.display = 'none';

    // Restore the background image
    body.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
    body.style.backgroundColor = ''; // Remove the white background

    // Remove the dynamically added menu sections
    const menuSections = document.querySelector('.menu-sections');
    if (menuSections) menuSections.remove();

    // Restore the visibility of the main content and chevrons
    const main = document.querySelector('main');
    const chevronNavigation = document.querySelector('.chevron-navigation');
    if (main) main.style.display = 'block';
    if (chevronNavigation) chevronNavigation.style.display = 'flex';
}

// Event listener for the right chevron (next image)
chevronRight.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length; // Loop to the first image if at the end
    updateBackgroundImage();
});

// Event listener for the left chevron (previous image)
chevronLeft.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + backgroundImages.length) % backgroundImages.length; // Loop to the last image if at the beginning
    updateBackgroundImage();
});

// Add click event listeners for menu and cross icons
menuIcon.addEventListener('click', activateMenu);
crossIcon.addEventListener('click', deactivateMenu);

// Initialize the first background image
updateBackgroundImage();