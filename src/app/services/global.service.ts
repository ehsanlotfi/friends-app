import { Injectable } from '@angular/core';
import * as _mod from 'src/app/models';
import { Capacitor } from '@capacitor/core';
import { Observable, map, of } from 'rxjs';
import { fakeData, Lightner } from './fake-data';
import { seasonsData } from './season.data';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  seasons = seasonsData;

  constructor() { }

  getAllSeasons(): _mod.Season[] {
    return this.seasons.map(({ episodes, ...rest }) => rest);
  }

  getAllEpisode(seasonId: number): _mod.Season[] {
    return this.seasons.filter(f => f.number == seasonId);
  }
  getAllQuote(seasonId: number, episodeId: number): Observable<_mod.Quote[]> {

    return of(fakeData);

  }

  setLeitnerCard(id: number): Observable<any> {

    return of();

  }
}