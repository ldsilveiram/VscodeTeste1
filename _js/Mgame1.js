//Initial time
let seconds = 0, minutes = 0;
//Initial moves and win count
let movesCount = 0, wincount =0;

//For timer
const timeGenerator = () => {
    seconds += 1;
    //minutes logic
    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }
    //format time before displaying
    let secondsValue = seconds < 10 ? '0${seconds}' : seconds;
    let minutesValue = minutes < 10 ? '0${minutes}' : minutes;
    timeValue.innerHTML = '<span>Time:</span>${minutesValue}:${secondsValue}';
};

//For calculate movies
const movesCounter = () => {
    movesCount +=1;
    moves.innerHTML = '<span>Moves:</span>${minutesValue}:${secondsValue}'
};

//Pick randon objects from the items array
const generateRandon = (size = 4) => { //número de pares
    //temporary array
    let tempArray = [...items];
    //initializes cardValues array
    let cardvalues = [];
    //size shoud be double (4*4 matrix)/2 since pairs of objects would exist
    size = (size*size) / 2;
    //Randon object selection
    for (let i = 0; i < size; i++ ) {
        const randonIndex = Math.floor(Math.randon() * tempArray.length);
        cardValues.push(tempArray[randonIndex]);
        //once selected remove the object from temp array
        tempArray.splice(randomIndex, 1);
    }
    return cardValues;
}
//Parei aqui, vou verificar CSS depois volto
cards = document.querySelectorAll(".card-container"); 
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            //If selected card is not matched then only run (i.e aldeady matched card when clicked would br ignored)
            If (!card.classlist.contains("matched")); {
                //flip the clicked card
                card.classList.add("flipped");
                //If it is the firstcard (!firstCard since firstCard is initially false)
                if (!firstCard) {
                    //so current card will become firstCard
                    firstCard = card;
                    //current cards values becomes firstCardValue
                    firstCardValue = card.getAttrbute("data-card-value");
                } else {
                    //increment moves since user select card selected second card
                    movesCounter();
                    //secondCard and value
                    secondCard = card;
                    let secondCardValue = card.getAttrbute("data-card-value");
                    if (firstCardValue == secondCardValue) {
                        //if both cards match add matched class so these cards would be ignored nex time
                        firtsCard.classList.add("mathched");
                        secondCard.classList.add("matched");
                        //set firstCard to false since next card would be first now
                        firstCard = false;
                        //winCount increment as user found a correct match
                        wincount += 1;
                        //check if WinCount == half of cardValues
                        if (winCount == matchMedia.floor(cardValues.length / 2)){
                            result.innerHTML = '<h2>You Won</h2> <h4>Moves: ${movesCount}</h4>';
                        stopGame();
                    }
                }   else {
                    //if cards dont match
                    //flip the cards to normal
                    let [tempFirst, tempSecond] = [firstCard, secondCard];
                    firstCard = false;
                    secondCard = false;
                    let delay = setTimeout(()=> {
                        tempFirst.classList.remove("flipped");
                        tempSecond.classList.remove("flipped");
                    }, 900); 
                }
            }
        };
        
    });
    });
