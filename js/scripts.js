// Buisiness Logic
var player1 = "";
var player2 = "";



var dice = function () {
  return Math.floor(6 * Math.random()) + 1;

}

function Game(round) {
  this.roll = 0;
  this.currentScore = 0;
  this.totalScore = 0;
  this.turn = turn;
  this.player;
}

// what Happens if you roll a one
Game.prototype.one = function(){
  if (this.roll === 1) {
    this.currentScore = 0;
    alert("Sorry " + this.player + ", you rolled a 1! Your turn is over!")
  }else {
    this.currentScore += this.roll;
  }
}

Game.prototype.hold = function() {
  this.totalScore += this.currentScore;
  this.currentScore = 0;
  alert("Turn Over");
}

Game.prototype.win = function () {
  if (this.totalScore >= 100) {
    alert("you win")
  }
}

Game.prototype.newGame = function () {
  this.roll = 0;
  this.currentScore = 0;
  this.totalScore = 0;
  this.player = "";
}

var clear = function() {
  $(".player1Name").val("");
  $(".player2Name").val("");
}

  // Game.prototype.switchPlayer = function() {
  //   if (this.allPLayers === 0) {
  //     this.allPlayers += 1
  //   }else {
  //     this.allPlayers -= 1
  //   }
  // }

  // this.players[0].totalValue = 1;

  $(document).ready(function(){
    $("button#play").click(function(event){
      event.preventDefault();
      // var player1 = new Game();
      // var player2 = new Game();
      $("#startCard").hide();
      $("#gameCard").show();
    });

    $("#roll").click(function(){
      alert("hello");
    });
    $("#hold").click(function(){
      alert("hello");
    });

  });
