const Game = require('./game.js');
const Player = require('./player.js');

class GameManager {

    /**
     * Constructor of the class, you will need to setup your chain array and the height
     * of your chain (the length of your chain array).
     * Also everytime you create a Blockchain class you will need to initialized the chain creating
     * the Genesis Block.
     * The methods in this class will always return a Promise to allow client applications or
     * other backends to call asynchronous functions.
     */
    constructor() {
        this.players = new Map();
        this.games = new Map();
        this.counter = 0;
    }

    /**
     * Utility method that return a Promise that will resolve with the height of the chain
     */
    createGame(pplayer) {
        var newPlayer = new Player.Player(pplayer);
        var gameSelected;
        if (this.games.size > 0) {
            for (let [key, game] of this.games) {
                game.status = "waiting_players";
                game.addPlayer(newPlayer);
                gameSelected = game;
            }
        }
        else {
            var newGame = new Game.Game();
            this.games.set(this.createRandomId(), newGame);
            newGame.addPlayer(newPlayer);
            gameSelected = newGame;
        }

        return gameSelected;
    }

    createRandomId(){
        var newId = "game" + this.counter;
        this.counter++;
        return newId;

    }

    //Play
    play(pgameId, pplayer, presult){
        var gameSelected = this.games.get(pgameId);
        return gameSelected.play(pplayer, presult);
    }

    //end the game

    //chosen randomly by the server:  wind direction and magnitude
    

}

module.exports.GameManager = GameManager;   