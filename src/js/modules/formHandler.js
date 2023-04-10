function tokenHandler(){
    const tokenFormBtn = document.querySelector('.token-adress__form-button'),
          tokenFormInput = document.querySelector('.token-adress__form-input'),
          tokenForm = document.querySelector('.token-adress__form'),
          tokenCopyMessage = document.querySelector('.copy');

         const inputText = tokenFormInput.value;
        tokenForm.addEventListener('submit', (event) =>{
            event.preventDefault();
            navigator.clipboard.writeText(inputText)
            .then(() =>{
                tokenCopyMessage.classList.add('show')
                setTimeout(() =>{
                    tokenCopyMessage.classList.remove('show')
                },2500)
            });
     })
}

tokenHandler()