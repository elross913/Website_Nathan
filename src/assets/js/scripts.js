// Select the chevron icons and the body element
const chevronLeft = document.getElementById('chevron-left');
const chevronRight = document.getElementById('chevron-right');
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

// Initialize the first background image
updateBackgroundImage();