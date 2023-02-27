const express = require('express');
var cors = require('cors')
bodyParser = require("body-parser");
const GameManager = require('./src/game_manager.js');
port = 8080;

class ApplicationServer {

    constructor() {
        //Express application object
        this.app = express();
        //Blockchain class object
        this.gameManager = new GameManager.GameManager();
        //Method that initialized the express framework.
        this.initExpress();
        //Method that initialized middleware modules
        this.initExpressMiddleWare();
        //Method that initialized the controllers where you defined the endpoints
        this.initEndpoints();
        //Method that run the express application.
        this.start();
        this.users = [];
    }

    initExpress() {
        this.app.set("port", 8080);
    }

    initExpressMiddleWare() {
        this.app.use(cors())
        this.app.use(bodyParser.urlencoded({extended:true}));
        this.app.use(bodyParser.json());
    }

    initEndpoints() {
        this.getJoinGame();
        this.postPlay();
    }

    start() {
        let self = this;
        this.app.listen(this.app.get("port"), () => {
            console.log(`Server Listening for port: ${self.app.get("port")}`);
        });
    }

    getJoinGame() {
        this.app.post("/joingame", async (req, res) => {
            console.log(req.body);

            if(req.body.id) {
                var playerId = req.body.id;
                var newGame = this.gameManager.createGame(playerId);
                return res.status(200).json(newGame);
            }
            
            else {
                return res.status(404).send("Block Not Found! Review the Parameters!");
            }
            
        });
    }

    postPlay() {
        this.app.post("/play", async (req, res) => {
            console.log("sads");
            console.log(req.body);
            var gameStatus = "";
            if(req.body.gameId) {
                
                if (req.body.id) {
                    if (req.body.result) {
                        gameStatus = this.gameManager.play(req.body.gameId, req.body.id, req.body.result);
                    }
                }
                return res.status(200).send(gameStatus);
            }
            
            else {
                return res.status(404).send("Block Not Found! Review the Parameters!");
            }
            
        });
    }

}

new ApplicationServer();