import { Injectable } from '@angular/core';
import { Game } from './model/game';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

    constructor(private http: HttpClient) { }

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    httpOptions2 = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text'
    };

  /** POST: add a new hero to the server */
    createGame(pplayer: string): Observable<Game> {
        return this.http.post<Game>("http://localhost:8080/joingame", {id: pplayer}, this.httpOptions);
    }

    play(presult: string) {
        return this.http.post("http://localhost:8080/play", {id: "player1", gameId: "game0", result: "missed"}, {responseType: 'text'});
    }
}
