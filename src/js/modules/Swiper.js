import Swiper, { Navigation, Pagination } from 'swiper';



  
function ideaSwiper(){
  
    const swiper = new Swiper('.idea__cards-mobile', {
      loop:false,
      centeredSlides: true,
      breakpoints:{
        320:{
          slidesPerView:1,
          spaceBetween:51,
        }
      }
    });
}
 
ideaSwiper()


function teamSwiper(){
  
  const swiper = new Swiper('.swiper', {
    modules:[Navigation],
    navigation: {
      nextEl: '.team-mobile-button-next',
      prevEl: '.team-mobile-button-prev',
    },
    breakpoints:{
      320:{
        slidesPerView:2,
        spaceBetween:10,

      },
      525:{
        slidesPerView:3
      },
      769:{
        slidesPerView:2
      },
    }

  });
}

teamSwiper()

  
function cardSwiper(){
  
  const swiper = new Swiper('.cards-mobile__swiper', {

    breakpoints:{
      320:{
        slidesPerView:2,
        spaceBetween:51,
        centeredSlides: true,
      },
      
    }
  });
}

cardSwiper()

