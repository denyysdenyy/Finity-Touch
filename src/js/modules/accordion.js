function handleQuestionsAccordionClass(){
    const accordion = document.getElementsByClassName('questions__accordion');
    if(accordion){
        for(let i = 0; i < accordion.length; i++){
            accordion[i].addEventListener('click', function(){
             this.classList.toggle('active')
             console.log('open')
            });
         }
    }
   
}
handleQuestionsAccordionClass()



