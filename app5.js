

// 1. Create the <img> element
const img = document.createElement("img");

// 2. Set the image attributes
img.src = "images/pumpkin-img.png" // Image URL
img.alt = "an image of a halloween pumpkin"; // Accessibility text
img.width = 300; // Width in pixels
img.height = 200; // Height in pixels

// 3. Optional: Add a class name for styling
img.className = "pumpkin-img"

// 4. Target the container and insert the image into the DOM
const container = document.getElementById("image-container")
container.appendChild(img);
    
