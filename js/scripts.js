
$(document).ready(function(){

  var player2 = {totalValue: 0, currentValue: 0};
  var player1 = {totalValue: 0, currentValue: 0};
  var allPlayers = [player1,player2];
  // Users array
  var newGame = new Game(allPLayers);
  newGame.rollDice()

Game = function(){
  this.players = []
  // this.allPlayers = allPlayers

}

Game.prototype.addPlayers = function(input){

  this.players.push(input);


}

var myjunk = new Game;

myjunk.addPlayers(allPlayers);


// function Game() {
//   this.players = players;
//   this.allPlayers = 0;
// }

Game.prototype.switchPlayer = function() {
  if (this.allPLayers === 0) {
    this.allPlayers += 1
  }else {
    this.allPlayers -= 1
  }
}

// this.players[0].totalValue = 1;

Game.prototype.rollDice = function() {
  var randomNumber = Math.floor(Math.random() * this.sides) + 1;
  if (allPlayers[0] === true) {
    this.currentValue += randomNumber;
    console.log(this.currentValue);
    }
    console.log(currentValue);
  }



$("#roll").click(function(){

});
$("#hold").click(function(){
  alert("hello");
});

});
