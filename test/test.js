var assert = require('assert');
var GameManager = require('../src/game_manager.js');

describe('GameManager', function () {
  var newGameManager = new GameManager.GameManager();
  describe('#indexOf()', function () {
    it('should have 1 game', function () {
      newGameManager.createGame("player1");
      assert.equal(newGameManager.games.size, 1);
    });
  });
});