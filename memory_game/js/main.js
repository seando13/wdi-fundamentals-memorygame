// console.log("Up and running!");

//console.log("User flipped " + cardsInPlay);
// console.log(cards);
// var cardOne = "queen";
// var cardTwo = "king";
// var cardThree = "queen";
// var cardFour = "king";
// var cards = ["queen", "queen", "king", "king"];
var cards = [
{
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png",
},
{
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png",
},
{
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png",
},
{
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png",
},
];
var cardsInPlay = [];
var score = 0;
var result = document.getElementById("match-or-not");
var clickedCards = document.getElementsByClassName("clicked");

var flipBack = function (){
	for (var i = 0; i < clickedCards.length; i+=1){
		clickedCards[i].setAttribute("src","images/back.png");
	}
};

var delayedFlipBack = function(){
	var timeoutID = window.setTimeout(flipBack, 800);
}

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!"); // i took away console.log
score += 1;
		document.getElementById("score").textContent = score;
} else {
alert("Sorry, try again."); // i took away console.log
delayedFlipBack();
}
cardsInPlay = [];
};

function flipCard() {
    var cardId = this.getAttribute('data-id');
    var card = cards[cardId];
    this.setAttribute("src", card.cardImage);
	  this.setAttribute("class", "clicked");
	  console.log(this);
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute('src', cards[cardId].cardImage);
     if (cardsInPlay.length === 2){
       checkForMatch();
       //cardsInPlay = [];

    };
   };

//console.log(cardsInPlay);


 function createBoard() {
  const cardTable = document.getElementById('game-board');
  for (var i = 0; i < cards.length; i++) {
  var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    cardTable.appendChild(cardElement);
  }
};

var resetGame = function(){
	score = 0;
	document.getElementById("score").textContent = score;
	result.textContent = "Ready for a new game??";
	flipBack();
};

createBoard();
document.querySelector("button").addEventListener("click", resetGame)
