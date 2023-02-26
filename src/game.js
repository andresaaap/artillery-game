

class Game {

    constructor(pId) {
        this.id = pId;
        this.players = [];
        this.turn = "";
        this.status = "waiting_players";
        this.windDirection = this.randomWindDirection();
        this.windMagnitude = this.randomWindMagnitude();
    }

    addPlayer(pplayer){
        this.players.push(pplayer);
        if (this.players.length == 1) {
            this.status = "in_play";
            this.turn = this.randomPlayer();
        }
    }

    randomWindDirection(){
        return this.windDirection = "left";
    }

    randomWindMagnitude(){
        return this.windMagnitude = 10;
    }

    randomPlayer(){
        return this.windMagnitude = 10;
    }

    play(pplayer, presult){
        if (this.turn == pplayer) {
            if (presult == "missed") {
                if (this.players[0] == this.turn) {
                    this.turn = this.players[1];
                }
                else {
                    this.turn = this.players[0];
                }
            }
            else {
                this.status = "game_over";
            }
            return this.status;
        }
        return "not_your_turn";
    }
    

}

module.exports.Game = Game;   