// ----myswiper---

 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


// ----constructer---

   var swiper = new Swiper(".constructer", {
     breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 20
    },
  },
      // slidesPerView:3,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


// ----registration---

 var swiper = new Swiper(".registration", {
  //   slidesPerView: 2,
  // spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  },

      // spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


// ----numbers----

  let increaseNumber = document.querySelectorAll('.increasingNumber');
  increaseNumber.forEach((increaseNumber)=>{


  let startNum = 0;
  let endVal = parseInt(increaseNumber.getAttribute('data-set'));

  
   let count = setInterval(()=>{
    startNum++;
    increaseNumber.textContent = startNum;
    if(startNum == endVal ){
      clearInterval(count);
    }
   },100) 
 });


