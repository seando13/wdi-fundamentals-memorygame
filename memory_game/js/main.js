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
var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!"); // i took away console.log
} else {
alert("Sorry, try again."); // i took away console.log
};
};

function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsInPlay.push(cards[cardId].rank);
     this.setAttribute('src', cards[cardId].cardImage);
     if (cardsInPlay.length === 2){
       checkForMatch();
       //cardsInPlay = [];

    };
   };
//console.log("User flipped " + cards[cardId].rank);
//console.log(cards[cardId].cardImage);
//console.log(cards[cardId].suit);}
console.log(cardsInPlay);


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

createBoard();
//cardsInPlay.push("queen"[cardId].rank);
// flipCard(0);
// flipCard(2);
//checkForMatch();


  // if (cardsInPlay[0] === cardsInPlay[2]) {alert("You found a match!");}
  //     else if (cardsInPlay[0] !== cardsInPlay[2]) alert("Sorry, try again");



// cardsInPlay.push(cardOne);
// cardsInPlay.push(cardTwo);
// var cardOne = cards[0];
// var cardTwo = cards[2];
// cardsInPlay.push(cardOne);
// cardsInPlay.push(cardTwo);
//  var cardOne = cards[0];
//  var cardTwo = cards[2];
//
// if (cardsInPlay[0] === cardsInPlay[2]) {alert("You found a match!");}
//     else if (cardsInPlay[0] !== cardsInPlay[2]) alert("Sorry, try again");

// var cardOne = cards[0];
// cardsInPlay.push(cardOne);
// console.log("User flipped " + cardOne);
//
// var cardTwo = cards[2];
// cardsInPlay.push(cardTwo);
// console.log("User flipped " + cardTwo);


// console.log(cardsInPlay);
// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardTwo);
// console.log("User flipped " + cardThree);
// console.log("User flipped " + cardFour);
// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardTwo);
// if (cardsInPlay.length === 2) {alert("You're all good!");}
