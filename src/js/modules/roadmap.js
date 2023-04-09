

function handlerRoadmapClass() {
    const circles = document.querySelectorAll('.token-roadmap-mobile-circle');
    const section = document.querySelector('.token-roadmap__title');
  
    const scrollAnimations = (entries, observer) => {
      entries.forEach((entry) => {
        const intersectionRatio = entry.intersectionRatio;
        // вычисляем координаты центра элемента
        const elementCenter = entry.boundingClientRect.top + entry.boundingClientRect.height / 2;
        // вычисляем координаты центра экрана
        const viewportCenter = window.innerHeight / 2;
        // анимируем, если центр элемента попадает в центр экрана
        if (intersectionRatio >= 0.5 && Math.abs(elementCenter - viewportCenter) < viewportCenter) {
          setTimeout(() => {
            entry.target.classList.add('aos-animate');
          }, 400); // задержка в 0,4 секунды
        }
      });
    }
  
    const options = {
      threshold: 0.2,
    };
  
    const observer = new IntersectionObserver(scrollAnimations, options);
  
    circles.forEach((circle) => {
      observer.observe(circle);
    });
  }
  
  handlerRoadmapClass();
  
  