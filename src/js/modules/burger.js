function setActive(){
    const burgerBtn = document.querySelector('.header__burger');
    const headerNav = document.querySelector('.header__nav');
    const body = document.querySelector('body')
    burgerBtn.addEventListener('click',() =>{
        headerNav.classList.toggle('active');
        burgerBtn.classList.toggle('active');
        body.classList.toggle('_lock');
        
    });

}
setActive();
export {setActive};