var planets = [
    "Mercury.jpg",
    "Venus.jpg",
    "Earth.jpg",
    "Mars.jpg",
    "Jupiter.jpg",
    "Saturn.jpg",
    "Uranus.jpg",
    "Neptune.jpg",
  ];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  var shuffled_planets = shuffleArray(planets);
  console.log(shuffled_planets);
  
  function flipCard() {
    this.classList.add("flipped");
  }
  
  
  for (let i = 0; i < shuffled_planets.length; i++) {
    cards[i].addEventListener("click", flipCard);
    console.log(i)
  }


  function flipCard() {
    this.classList.toggle('flipped'); 
}
  
  var cards = "";
  for (var index = 0; index < shuffled_planets.length; index++)
    cards += '<div class="card"></div>';

  function cardClicked() {
    // Check if the card is already matched or flipped
    if (this.classList.contains('matched') || this.classList.contains('flipped')) {
        return;
    }

    this.classList.add('flipped');

    // Check if two cards are flipped
    var flippedCards = document.querySelectorAll('.flipped');
    if (flippedCards.length === 2) {
        // Compare the two flipped cards
        var card1 = flippedCards[0].getAttribute('data-id');
        var card2 = flippedCards[1].getAttribute('data-id');

        if (card1 === card2) {
            // Cards match
            flippedCards.forEach(card => {
                card.classList.add('matched');
                card.classList.remove('flipped');
            });
        } else {
            // Cards do not match, flip them back
            setTimeout(() => {
                flippedCards.forEach(card => {
                    card.classList.remove('flipped');
                });
            }, 1000); // Adjust delay as needed
        }
    }

    // Check if all cards are matched (end of game)
    var allMatched = document.querySelectorAll('.matched');
    if (allMatched.length === 8 * 2) {
        // Display a message or perform any final actions
        alert('Congratulations! You have completed the game.');
    }
}

// Add event listeners to each card
var cards = document.querySelectorAll('.card');
cards.forEach(card => card.addEventListener('click', cardClicked));




