const teamButton = document.getElementById('team__button');
if(teamButton){
    teamButton.addEventListener('click',showCards);
}
function showCards(){
    const teamCard = document.getElementsByClassName('team__card');
    if(teamCard){
        for(let i = 8; i < teamCard.length; i++){
            teamCard[i].classList.toggle('hidden')
        }
    }
}

