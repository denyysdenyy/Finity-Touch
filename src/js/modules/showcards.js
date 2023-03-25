function showCards(){
    const teamButton = document.getElementById('team__button');
    const teamCard = document.getElementsByClassName('team__card');
    teamButton.addEventListener('click', () =>{
        for(let i = 8; i < teamCard.length; i++){
            teamCard[i].classList.toggle('hidden')
        }
    })
}
showCards();