var images = [
    "Mercury.jpg",
    "Venus.jpg",
    "Earth.jpg",
    "Mars.jpg",
    "Jupiter.jpg",
    "Saturn.jpg",
    "Uranus.jpg",
    "Neptune.jpg",
  ];

var container = document.getElementById("gamebox");

var images = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
var fullShuffledImages = shuffle([...images, ...images]);

let my_cards = '';
for (var i = 0; i < fullShuffledImages.length; i++) {
    my_cards += <div class="card" data-id=" + fullShuffledImages[i] + `">
        <div class="front-side both-side">
          <img class="front-image"
            src="./images/` + fullShuffledImages[i] + `.png"
            alt=""
          />
        </div>
        <div class="back-side both-side">
          <img
            src="./images/nine.png"
            alt=""
          />
        </div>
      </div>`;
}
container.innerHTML = my_cards;

var cards = document.getElementsByClassName('card');
var first = '';
var second = '';
var firstElement, secondElement;

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', (element) => {
        var clickedCard = element.target.closest('.card');
        if (clickedCard.classList.contains('visible')) return;
        
        clickedCard.classList.add("visible");
        if (first === '') {
            first = clickedCard.dataset.id;
            firstElement = clickedCard;
        } else {
            second = clickedCard.dataset.id;
            secondElement = clickedCard;

            if (first === second) {
                firstElement = secondElement = null;
            } else {
                setTimeout(() => {
                    firstElement.classList.remove('visible');
                    secondElement.classList.remove('visible');
                    firstElement = secondElement = null;
                }, 500);
            }
            first = '';
            second = '';
        }
    });
}

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}




