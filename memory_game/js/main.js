console.log("Up and running!");

//console.log("User flipped " + cardsInPlay);
// console.log(cards);
// var cardOne = "queen";
// var cardTwo = "king";
// var cardThree = "queen";
// var cardFour = "king";
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);


if (cardsInPlay[0] === cardsInPlay[2]) {alert("You found a match!");}
    else if (cardsInPlay[0] !== cardsInPlay[2]) alert("Sorry, try again");




// console.log(cardsInPlay);
// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardTwo);
// console.log("User flipped " + cardThree);
// console.log("User flipped " + cardFour);
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
// if (cardsInPlay.length === 2) {alert("You're all good!");}
