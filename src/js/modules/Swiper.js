import Swiper, { Navigation, Pagination } from 'swiper';



  
function ideaSwiper(){
  
    const swiper = new Swiper('.idea__cards-mobile', {
      slidesPerView:'auto',
      spaceBetween: 30,
      centeredSlides: true,
      breakpoints:{
        991:{
          // slidesPerView:3,
        
          
        },
        320:{
          // slidesPerView:2,
        },
      }
           
    });
}
 
ideaSwiper()

  // export default {ideaSwiper}