import { Component } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../model/game';

@Component({
  selector: 'app-artillery-controllers',
  templateUrl: './artillery-controllers.component.html',
  styleUrls: ['./artillery-controllers.component.css']
})
export class ArtilleryControllersComponent {
    disabled = false;
    max = 100;
    min = 0;
    showTicks = false;
    step = 1;
    thumbLabel = false;
    simulateResult = "s";
    games: Game[] = [];
    

    constructor(private gameService: GameService) {}

    play(): void {
        this.gameService.play("player1").subscribe(result => {
          console.log(result);
        });;
    }

}
