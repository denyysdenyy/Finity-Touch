function handleQuestionsAccordionClass(){
    const accordion = document.getElementsByClassName('questions__accordion');
    const accordionBody = document.getElementsByClassName('questions__accordion-body');
    console.log(accordion)
    for(let i = 0; i < accordion.length; i++){
       accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
       });
    }
}
handleQuestionsAccordionClass()

