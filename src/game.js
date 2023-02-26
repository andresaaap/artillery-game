

class Game {

    constructor(pId) {
        this.id = pId;
        this.players = [];
        this.turn = "";
        this.status = "waiting_players";
        this.windDirection = "";
        this.windMagnitude = 0;
    }

    addPlayer(pplayer){
        this.players.push(pplayer);
        if (this.players.length == 1) {
            this.status = "in_play";
        }
    }

    randomWindDirection(){
        this.windDirection = "left";
    }
    

}

module.exports.Game = Game;   