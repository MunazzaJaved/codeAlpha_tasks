// Array of main image paths (replace these with the correct file paths)
const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
    "images/image6.jpg",
    "images/image7.jpg",
    "images/image8.jpg",
    "images/image9.jpg"
  ];
  let currentIndex = 0;
  
  // Function to show selected image in large display
  function showImage(index) {
    currentIndex = index;
    document.getElementById("largeImage").src = images[currentIndex];
  }
  
  // Function to navigate through images
  function navigate(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    document.getElementById("largeImage").src = images[currentIndex];
  }
  
