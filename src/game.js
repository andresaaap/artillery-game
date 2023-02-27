

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
        console.log("addPlayer");
        console.log(pplayer);
        this.players.push(pplayer);
        console.log(this.players);
        if (this.players.length == 2) {
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
        console.log("randomPlayer");
        console.log(this.players[0]);
        return this.turn = this.players[0];
    }

    play(pplayer, presult){
        console.log("play pplayer");
        console.log(pplayer);
        console.log("play this.turn");
        console.log(this.turn);
        if (this.turn.id == pplayer) {
            if (presult == "missed") {
                if (this.players[0].id == this.turn.id) {
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