// console.log("Up and running!");

//console.log("User flipped " + cardsInPlay);
// console.log(cards);
// var cardOne = "queen";
// var cardTwo = "king";
// var cardThree = "queen";
// var cardFour = "king";
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!"); // i took away console.log
} else {
alert("Sorry, try again."); // i took away console.log
}
}
var flipCard = function(cardId) {
console.log("User flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);}
flipCard(0);
flipCard(2);
checkForMatch();
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
