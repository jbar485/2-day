// Buisiness Logic
var player1 = "";
var player2 = "";
var currentPlayer = $("#playerOne").val();


var dice = function () {
  return Math.floor(6 * Math.random()) + 1;

}

function Turn() {
  this.turn = 0;
}

function Game(round) {
  this.roll = 0,
  this.currentScore = 0,
  this.totalScore = 0,
  this.player
}

// what Happens if you roll a one
Game.prototype.one = function(){
  if (this.roll === 1) {
    this.currentScore = 0;
    alert("Sorry " + this.player + ", you rolled a 1! Your turn is over!")
  }else {
    this.currentScore += this.roll;
  }
  if (turn.turn == player1) {
    turn.turn = player2;

  }
}

Game.prototype.hold = function(event) {
  if (currentPlayer === $("#playerOne").val()) {

  }
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
var turn = new Turn();
  // Game.prototype.switchPlayer = function() {
  //   if (this.allPLayers === 0) {
  //     this.allPlayers += 1
  //   }else {
  //     this.allPlayers -= 1
  //   }
  // }

  // this.players[0].totalValue = 1;
  var player1 = new Game();
  var player2 = new Game();

  $(document).ready(function(){
    $("button#play").click(function(event){
      event.preventDefault();
      $("#startCard").hide();
      $("#gameCard").show();

      var playerOne = $("#playerOne").val();
      var playerTwo = $("#playerTwo").val();

      $("#player1Name").text(playerOne);
      $("#player2Name").text(playerTwo);

      player1.player = playerOne;
      player2.player = playerTwo;
      turn.turn = player1;

      console.log(player1, player2);
    });


    $("#roll").click(function(event){
      console.log(turn.turn, player1);
      if (turn.turn === player1) {
        player1.roll = dice();
        console.log(player1.roll);
        $("#player1Current").text(player1.roll);
        player1.one();
        $("#player1Total").text(player1.currentScore);
      }
    });
    $("#hold").click(function(){
      return hold();
    });

  });
