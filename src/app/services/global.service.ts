import { Injectable } from '@angular/core';
import * as _mod from 'src/app/models';
import { Capacitor } from '@capacitor/core';
import { Observable, map, of } from 'rxjs';
import { fakeData } from './fake-data';
import { seasonsData } from './season.data';

@Injectable({
  providedIn: 'root'
})
export class GlobalService
{

  seasons = seasonsData;

  constructor() { }

  getAllSeasons(): _mod.Season[]
  {
    return this.seasons.map(({ episodes, ...rest }) => rest);
  }

  getAllEpisode(seasonId: number): _mod.Season[]
  {
    return this.seasons.filter(f => f.number == seasonId);
  }

}