import Swiper, { Navigation, Pagination } from 'swiper';



  
function ideaSwiper(){
  
    const swiper = new Swiper('.idea__cards-mobile', {
      slidesPerView:'auto',
      spaceBetween: 30,
      centeredSlides: true,
      breakpoints:{
        320:{
          slidesPerView:2,
        },
        991:{
          slidesPerView:3,
        },
      }
           
    });
}
 
ideaSwiper()


function teamSwiper(){
  
  const swiper = new Swiper('.swiper', {
    modules:[Navigation],
    navigation: {
      nextEl: '.icon-button-next',
      prevEl: '.icon-button-prev',
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