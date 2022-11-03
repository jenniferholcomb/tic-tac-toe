// Business Logic

// Business Logic for Game Object
function Game() {
  this.players = {};
  this.id = 0;
  this.squares = {};
}

Game.prototype.addPlayer = function(players) {
  players.id = this.assignId();
  this.players[players.id] = players;
};

Game.prototype.assignId = function() {
  this.id += 1;
  return this.id;
};

function Squares() {
  this[1] = null;
  this[2] = null;
  this[3] = null;
  this[4] = null;
  this[5] = null;
  this[6] = null;
  this[7] = null;
  this[8] = null;
  this[9] = null;
}

// Business Logic for Player
function Player(name) {
  this.name = name;
  this.marked = []; //which coordinates player has marked
}

Player.prototype.markSquare = function (square){
  return this.marked.push(square);
};

// players get ids set
// player can click on a square, which is populated with X or O
// switches to next player, who clicks a square as well
// etc. until a win condition is met

// if there is a value populating "square" it is true - it is filled
// if there's no value, it's null - empty

function newTurn(game.squares, playerId) {
  if (game.squares === null) // square is empty and can be populated
    if (player === 'x') {
      game.squares = 'x';
      game.turn = player2; //switch player
    } else if (player === o) {
      game.squares = 'o';
      game.turn = player1;
    }
  else { // game.squares is already populated
    return 0;
  }
  return square 
})

winning.pattterg = [1,2,3]
pattern2 = [1,5,9]

function checkBoard (player) {
  let winningArr = [[1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7]];
  //check for winning patterns
  if (game.players[marked].includes winningArr) {

  }
}

// UI Logic

// newTurn, player clicks square, assigns ID to square. so square is now true.