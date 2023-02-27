import { Player } from './player';

export interface Game {
	id: string;
    players:  Player[];
    turn: string;
    status: string;
    windDirection: string;
    windMagnitude: number;
}
