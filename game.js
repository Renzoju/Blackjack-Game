// Card images and values 
const cardImages = {
    '2_of_hearts': 'images/2H.png',
    '3_of_hearts': 'images/3H.png',
    '4_of_hearts': 'images/4H.png',
    '5_of_hearts': 'images/5H.png',
    '6_of_hearts': 'images/6H.png',
    '7_of_hearts': 'images/7H.png',
    '8_of_hearts': 'images/8H.png',
    '9_of_hearts': 'images/9H.png',
    'jack_of_hearts': 'images/jH.png',
    'queen_of_hearts': 'images/qH.png',
    'king_of_hearts': 'images/kH.png',
    'ace_of_hearts': 'images/aH.png',
    '2_of_diamonds': 'images/2D.png',
    '3_of_diamonds': 'images/3D.png',
    '4_of_diamonds': 'images/4D.png',
    '5_of_diamonds': 'images/5D.png',
    '6_of_diamonds': 'images/6D.png',
    '7_of_diamonds': 'images/7D.png',
    '8_of_diamonds': 'images/8D.png',
    '9_of_diamonds': 'images/9D.png',
    'jack_of_diamonds': 'images/JD.png',
    'queen_of_diamonds': 'images/qD.png',
    'king_of_diamonds': 'images/kD.png',
    'ace_of_diamonds': 'images/AD.png',
    '2_of_clubs': 'images/2C.png',
    '3_of_clubs': 'images/3C.png',
    '4_of_clubs': 'images/4C.png',
    '5_of_clubs': 'images/5C.png',
    '6_of_clubs': 'images/6C.png',
    '7_of_clubs': 'images/7C.png',
    '8_of_clubs': 'images/8C.png',
    '9_of_clubs': 'images/9C.png',
    'jack_of_clubs': 'images/JC.png',
    'queen_of_clubs': 'images/QC.png',
    'king_of_clubs': 'images/KC.png',
    'ace_of_clubs': 'images/AC.png',
    '2_of_spades': 'images/2S.png',
    '3_of_spades': 'images/3S.png',
    '4_of_spades': 'images/4S.png',
    '5_of_spades': 'images/5S.png',
    '6_of_spades': 'images/6S.png',
    '7_of_spades': 'images/7S.png',
    '8_of_spades': 'images/8S.png',
    '9_of_spades': 'images/9S.png',
    'jack_of_spades': 'images/JS.png',
    'queen_of_spades': 'images/QS.png',
    'king_of_spades': 'images/KS.png',
    'ace_of_spades': 'images/AS.png',
    'card_back': 'images/cardBack.png'
};

const cardValues = {
    '2_of_hearts': 2, '3_of_hearts': 3, '4_of_hearts': 4, '5_of_hearts': 5, '6_of_hearts': 6, '7_of_hearts': 7, '8_of_hearts': 8, '9_of_hearts': 9, 'jack_of_hearts': 10, 'queen_of_hearts': 10, 'king_of_hearts': 10, 'ace_of_hearts': 11,
    '2_of_diamonds': 2, '3_of_diamonds': 3, '4_of_diamonds': 4, '5_of_diamonds': 5, '6_of_diamonds': 6, '7_of_diamonds': 7, '8_of_diamonds': 8, '9_of_diamonds': 9, 'jack_of_diamonds': 10, 'queen_of_diamonds': 10, 'king_of_diamonds': 10, 'ace_of_diamonds': 11,
    '2_of_clubs': 2, '3_of_clubs': 3, '4_of_clubs': 4, '5_of_clubs': 5, '6_of_clubs': 6, '7_of_clubs': 7, '8_of_clubs': 8, '9_of_clubs': 9, 'jack_of_clubs': 10, 'queen_of_clubs': 10, 'king_of_clubs': 10, 'ace_of_clubs': 11/1,
    '2_of_spades': 2, '3_of_spades': 3, '4_of_spades': 4, '5_of_spades': 5, '6_of_spades': 6, '7_of_spades': 7, '8_of_spades': 8, '9_of_spades': 9, 'jack_of_spades': 10, 'queen_of_spades': 10, 'king_of_spades': 10, 'ace_of_spades': 11,
    'card_back': 0
};

// Game start variables
let playerTotal = 0;
let dealerTotal = 0;
let balance = 1000;
let bet = 0;

// Reset game function
function resetGame() {
    document.getElementById('dealer-cards').innerHTML = '';
    document.getElementById('player-cards').innerHTML = '';
    document.getElementById('bet-area').innerHTML = '';
    playerTotal = 0;
    dealerTotal = 0;
    document.getElementById('dealer-score').innerText = dealerTotal;
    document.getElementById('player-score').innerText = playerTotal;
    document.getElementById('hit-button').disabled = true;
    document.getElementById('stand-button').disabled = true;
    document.getElementById('start-game-button').style.display = 'block';
    updateBalance();
    updateBet();
}

// Get a random card exept the card back
function getRandomCard() {
    const cards = Object.keys(cardImages).filter(card => card !== 'card_back');
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
}

// Deal cards to start the game
function dealCards() {
    if (bet === 0) {
        alert('Please place a bet to start the game.');
        return;
    }
    document.getElementById('start-game-button').style.display = 'none';
    const dealerCard1 = getRandomCard();
    const playerCard1 = getRandomCard();
    const playerCard2 = getRandomCard();

    const dealerCardsContainer = document.getElementById('dealer-cards');
    const playerCardsContainer = document.getElementById('player-cards');

    dealerCardsContainer.innerHTML = `
        <img src="${cardImages[dealerCard1]}" alt="Dealer Card 1">
        <img src="${cardImages['card_back']}" alt="Dealer Card 2">
    `;

    playerCardsContainer.innerHTML = `
        <img src="${cardImages[playerCard1]}" alt="Player Card 1">
        <img src="${cardImages[playerCard2]}" alt="Player Card 2">
    `;

    playerTotal = cardValues[playerCard1] + cardValues[playerCard2];
    dealerTotal = cardValues[dealerCard1];
    document.getElementById('player-score').innerText = playerTotal;
    document.getElementById('dealer-score').innerText = dealerTotal;
    document.getElementById('hit-button').disabled = false;
    document.getElementById('stand-button').disabled = false;
    document.getElementById('double-down-button').disabled = false;
}

// Hit (take a new card)
function hit() {
    const newCard = getRandomCard();
    const playerCardsContainer = document.getElementById('player-cards');
    playerCardsContainer.innerHTML += `<img src="${cardImages[newCard]}" alt="Player Card">`;

    playerTotal += cardValues[newCard];
    document.getElementById('player-score').innerText = playerTotal;

    if (playerTotal > 21) {
        document.getElementById('hit-button').disabled = true;
        document.getElementById('stand-button').disabled = true;
        setTimeout(() => {
            alert('Player is busted! Dealer wins.');
            bet = 0;
            resetGame();
        }, 500);
    }
}

// Stand end the player's turn
function stand() {
    const dealerCardsContainer = document.getElementById('dealer-cards');
    const dealerCard2 = getRandomCard();

    dealerCardsContainer.innerHTML = dealerCardsContainer.innerHTML.replace(
        `<img src="${cardImages['card_back']}" alt="Dealer Card 2">`,
        `<img src="${cardImages[dealerCard2]}" alt="Dealer Card 2">`
    );
    dealerTotal += cardValues[dealerCard2];
    document.getElementById('dealer-score').innerText = dealerTotal;

    function dealerHit() {
        if (dealerTotal < 17) {
            const newCard = getRandomCard();
            dealerCardsContainer.innerHTML += `<img src="${cardImages[newCard]}" alt="Dealer Card">`;
            dealerTotal += cardValues[newCard];
            document.getElementById('dealer-score').innerText = dealerTotal;
            setTimeout(dealerHit, 1000);
        } else {
            checkWinner();
        }
    }

    setTimeout(dealerHit, 1000);

    document.getElementById('hit-button').disabled = true;
    document.getElementById('stand-button').disabled = true;
    
}

// Check the winner after dealer's turn
function checkWinner() {
    if (dealerTotal > 21) {
        alert('Dealer is busted! Player wins.');
        balance += bet * 2;
    } else if (dealerTotal > playerTotal) {
        alert('Dealer wins.');
    } else if (dealerTotal < playerTotal) {
        alert('Player wins.');
        balance += bet * 2;
    } else {
        alert('It\'s a tie!');
        balance += bet;
    }
    bet = 0;
    resetGame();
}

// update spler zijn balance display
function updateBalance() {
    document.getElementById('balance').innerText = `${balance}`;
}

// Update speler zijn  bet display
function updateBet() {
    document.getElementById('bet').innerText = `${bet}`;
}

// Place bet function
function placeBet(amount, chipId) {
    if (balance >= amount) {
        bet += amount;
        balance -= amount;
        updateBalance();
        updateBet();

    }
}





function doubleDown() {
    if (balance >= bet) {
    // verdubbel bet 
        balance -= bet;
        bet *= 2;
        updateBalance();
        updateBet();

        // Voeg een blanco kaart toe aan de speler's kaartencontainer
        const playerCardsContainer = document.getElementById('player-cards');
        const blankCard = document.createElement('img');
        blankCard.src = cardImages['card_back'];
        blankCard.alt = 'Hidden Card';
        blankCard.id = 'hidden-card';
        playerCardsContainer.appendChild(blankCard);

        // Disable knoppen zodat de speler niks kan doen na double down
        document.getElementById('hit-button').disabled = true;
        document.getElementById('stand-button').disabled = true;

        // Omgekeerde dealer-kaart vervangen door een echte kaart
        const dealerCardsContainer = document.getElementById('dealer-cards');
        const dealerSecondCard = getRandomCard(); // Trek een nieuwe kaart voor de dealer
        dealerTotal += cardValues[dealerSecondCard];

        setTimeout(() => {
            dealerCardsContainer.innerHTML = dealerCardsContainer.innerHTML.replace(
                `<img src="${cardImages['card_back']}" alt="Dealer Card 2">`,
                `<img src="${cardImages[dealerSecondCard]}" alt="Dealer Card 2">`
            );
            document.getElementById('dealer-score').innerText = dealerTotal;

            // Start dealer's beurt
            setTimeout(dealerHit, 1000);
        }, 1000);

        // Dealer speelt eerst zijn beurt
        function dealerHit() {
            if (dealerTotal < 17) {
                const newCard = getRandomCard();
                dealerTotal += cardValues[newCard];

                // Voeg dealer's nieuwe kaart toe aan de UI
                const newCardImg = document.createElement('img');
                newCardImg.src = cardImages[newCard];
                newCardImg.alt = 'Dealer Card';
                dealerCardsContainer.appendChild(newCardImg);

                document.getElementById('dealer-score').innerText = dealerTotal;

                // Dealer blijft hitten tot minimaal 17
                setTimeout(dealerHit, 1000);
            } else {
                // Zodra dealer klaar is, onthul de verborgen kaart van de speler
                revealPlayerCard();
            }
        }

        // Onthul de verborgen kaart van de speler
        function revealPlayerCard() {
            const hiddenCard = document.getElementById('hidden-card');
            const newCard = getRandomCard();
            playerTotal += cardValues[newCard];

            setTimeout(() => {
                hiddenCard.src = cardImages[newCard];
                hiddenCard.alt = 'Player Card';
                document.getElementById('player-score').innerText = playerTotal;

                // Controleer of de speler is gebust
                if (playerTotal > 21) {
                    setTimeout(() => {
                        alert('Player is busted! Dealer wins.');
                        bet = 0;
                        resetGame();
                    }, 1000);
                } else {
                    // Als de speler niet bust is, bepaal de winnaar
                    setTimeout(checkWinner, 1000);
                }
            }, 1000);
        }
    } else {
        alert('Not enough balance to double down.');
    }
}


 


document.getElementById('double-down-button').addEventListener('click', doubleDown);
document.getElementById('start-game-button').addEventListener('click', dealCards);
document.getElementById('hit-button').addEventListener('click', hit);
document.getElementById('stand-button').addEventListener('click', stand);
document.getElementById('chip-Stack0').addEventListener('click', () => placeBet(1, 'chip-Stack0'));
document.getElementById('chip-Stack1').addEventListener('click', () => placeBet(10, 'chip-Stack1'));
document.getElementById('chip-Stack2').addEventListener('click', () => placeBet(50, 'chip-Stack2'));
document.getElementById('chip-Stack3').addEventListener('click', () => placeBet(100, 'chip-Stack3'));
