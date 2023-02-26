import { Component } from '@angular/core';

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
    value = 0;
}
