const cards = document.querySelectorAll(".card");
let hasFlippedCard = false;
let lockBoard=false;
let firstCard,secondCard;

//card flip
function flipCard(){
    if (lockBoard)return;
    this.classList.toggle("flip")

    if (!hasFlippedCard){
        //first click  
        hasFlippedCard=true;
        firstCard=this;
    }else {
        //second click
        hasFlippedCard=false;
        secondCard=this;
        if (firstCard.dataset.framework === secondCard.dataset.framework){
            firstCard.removeEventListener("click",flipCard)
            secondCard.removeEventListener("click",flipCard)                 
        }
        else {

            let lockBoard = true
            setTimeout(() => {
                firstCard.classList.remove("flip");
                secondCard.classList.remove("flip");

                let lockBoard = false
            },500)
        }
    }
}
cards.forEach(card => card.addEventListener("click",flipCard))



//shuffle 
// window.onload={
//     shuffle();
// }
//count moves
function count(){
    var count= document.getElementById("count")
    count.textContent++
}

const shuffle=()=>{
    Array.from(cards).forEach(function(box){
        box.style.order=Math.floor(Math.random() * 16);
        var coun = document.getElementById("count");
        coun.textContent="0";
    })
}
const refreshButton = document.querySelector("#refresh");

refreshButton.addEventListener("click",shuffle);
