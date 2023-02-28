import { Component } from '@angular/core';
import { GameService } from './game.service';
import { Game } from './model/game';
import { Player } from './model/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Artillery video game';

  games: Game[] = [];
  player: Player = {id: ""};

  constructor(private gameService: GameService) {}

  createGame(): void {
      this.gameService.createGame(this.player.id).subscribe(game => {
        this.games.push(game);
        console.log(this.games);
      });

  }
}
