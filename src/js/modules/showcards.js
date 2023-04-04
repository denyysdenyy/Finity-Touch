const teamButton = document.getElementById('team__button');
function showCards(){
    const teamCard = document.getElementsByClassName('team__card');
        for(let i = 8; i < teamCard.length; i++){
            teamCard[i].classList.toggle('hidden')
        }
}

teamButton.addEventListener('click',showCards);
