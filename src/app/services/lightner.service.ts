import { Injectable } from '@angular/core';
import * as _mod from 'src/app/models';
import { Observable, map, of } from 'rxjs';
import { Lightner } from './fake-data';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class LightnerService {
  public WordLightner = [];
  constructor() {
this.getListLightner().then(list=>{
if(list)
{
  this.WordLightner=list

}
else
{
  this.WordLightner=[];
}

});

   }
  async setLightner(list: _mod.Lightner[]) {
    await Preferences.set({
      key: 'lightner',
      value: JSON.stringify(list)
    });
  }

  // JSON "get" example
  async getListLightner() {
    const ret = await Preferences.get({ key: 'lightner' });
    return JSON.parse(ret.value)
  }
}