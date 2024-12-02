// Function to scroll to the respective event section
function scrollToEvent(eventId) {
    document.getElementById(eventId).scrollIntoView({ behavior: 'smooth' });
  }
  // Get modal and close button
const modal = document.getElementById("imageModal");
const closeModal = document.getElementById("closeModal");
const modalImage = document.getElementById("modalImage");
const caption = document.getElementById("caption");

// Get all images inside event-details
const eventImages = document.querySelectorAll('.event-details img');

// Add click event listener to each image
eventImages.forEach((img) => {
  img.addEventListener('click', function() {
    // Show modal
    modal.style.display = "block";
    modalImage.src = this.src;  // Set modal image source to clicked image
    caption.innerHTML = this.alt;  // Set caption text (optional)
  });
});

// Close the modal when the close button is clicked
closeModal.addEventListener('click', function() {
  modal.style.display = "none";
});
  
// Close the modal if the user clicks outside of the image
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});