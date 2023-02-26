var assert = require('assert');
var GameManager = require('../src/game_manager.js');

describe('GameManager', function () {
  describe('test createGame', function () {
    var newGameManager = new GameManager.GameManager();
    it('should have 1 game', function () {
      newGameManager.createGame("player1");
      assert.equal(newGameManager.games.size, 1);
    });
  });

  describe('test play', function () {
    var newGameManager2 = new GameManager.GameManager();
    it('should return in_play when there are 2 players and missed', function () {
      newGameManager2.createGame("player1");
      newGameManager2.createGame("player2");
      let currentPlayer = newGameManager2.games.get("game0").turn;
      var playResult = newGameManager2.play("game0", currentPlayer, "missed");
      assert.equal(playResult, "in_play");
    });

    it('should return not_your_turn when there are 2 players and not turn', function () {
      newGameManager2.createGame("player1");
      newGameManager2.createGame("player2");
      let currentPlayer = newGameManager2.games.get("game0").turn;
      let notCurrentPlayer;

      if (currentPlayer == newGameManager2.games.get("game0").players[0]) {
          notCurrentPlayer = newGameManager2.games.get("game0").players[1];
      }
      else {
          notCurrentPlayer = newGameManager2.games.get("game0").players[0];
      }

      var playResult = newGameManager2.play("game0", notCurrentPlayer, "missed");
      assert.equal(playResult, "not_your_turn");
    });

    it('should return game_over when there are 2 players and win', function () {
      newGameManager2.createGame("player1");
      newGameManager2.createGame("player2");
      let currentPlayer = newGameManager2.games.get("game0").turn;
      var playResult = newGameManager2.play("game0", currentPlayer, "win");
      assert.equal(playResult, "game_over");
    });
  });
});