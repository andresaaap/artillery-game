const express = require('express');
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
        this.app.use(bodyParser.urlencoded({extended:true}));
        this.app.use(bodyParser.json());
    }

    initEndpoints() {
        this.getJoinGame();
    }

    start() {
        let self = this;
        this.app.listen(this.app.get("port"), () => {
            console.log(`Server Listening for port: ${self.app.get("port")}`);
        });
    }

    getJoinGame() {
        this.app.get("/joingame", async (req, res) => {
            if(true) {
                return res.status(200).send("hello");
            }
            
            else {
                return res.status(404).send("Block Not Found! Review the Parameters!");
            }
            
        });
    }

}

new ApplicationServer();