function setActive(){
    const burgerBtn = document.querySelector('.header__burger');
    const headerNav = document.querySelector('.header__nav');
    burgerBtn.addEventListener('click',() =>{
        headerNav.classList.toggle('active');
        burgerBtn.classList.toggle('active');
    });

}
setActive();
export {setActive};