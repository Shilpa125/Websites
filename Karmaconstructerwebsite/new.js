document.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.swiper-container', {
    // Enable autoplay
    autoplay: {
      delay: 3000, // Autoplay delay in milliseconds (adjust as needed)
    },
    
    // Enable loop
    loop: true,

    // Add pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Add navigation
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});