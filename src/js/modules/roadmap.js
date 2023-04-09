function hanlderRoadmapClass(){
   const circles = document.querySelectorAll('.token-roadmap-mobile-circle');
   const section = document.querySelector('.token-roadmap__title');


   const scrollImations = (entries, observer) => {
    entries.forEach((entry) => {
      // анимируем, если элемент целиком попадает в отслеживаемую область
      if(entry.isIntersecting && entry.intersectionRatio == 1) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }

    const options = { threshold: 1.0, };
    const observer = new IntersectionObserver(scrollImations, options);
    circles.forEach((circle =>{
        observer.observe(circle)
    }));
}
hanlderRoadmapClass()