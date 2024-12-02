const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });
  
  
  // Select all the "Message" buttons and "Back" buttons
  const messageButtons = document.querySelectorAll('.message-button');
  const backArrowButtons = document.querySelectorAll('.back-arrow-btn');
  const cards = document.querySelectorAll('.card'); // Now selecting the wrapper with class "card"
  
  // Add event listener to each "Message" button to trigger the flip
  messageButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const card = cards[index]; // Get the card wrapper
    card.classList.add('flip'); // Add the flip class to trigger the flip
  });
  });

  // Add event listener to each "Back" button to flip back
  backArrowButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const card = cards[index]; // Get the card wrapper
    card.classList.remove('flip'); // Remove the flip class to flip it back
  });
  });