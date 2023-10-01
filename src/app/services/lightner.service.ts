import { Injectable } from '@angular/core';
import * as _mod from 'src/app/models';
import { Lightner } from './fake-data';
import { Preferences } from '@capacitor/preferences';
import { HttpClient } from '@angular/common/http';
import { TextToSpeech } from '@capacitor-community/text-to-speech';
@Injectable({
  providedIn: 'root'
})
export class LightnerService {
  public WordLightner = [];
  constructor(private http: HttpClient,

  ) {
    this.getListLightner().then(list => {
      if (list) {
        this.WordLightner = list

      }
      else {
        this.WordLightner = [];
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
  async getListLightnerToString(): Promise<string> {
    const ret = await Preferences.get({ key: 'lightner' });
    if(ret.value!=null){
      return JSON.parse(ret.value).map(f => f.en).join(' ')
    }
    else
    {
      return "";
    }
  }
   translateApi(word: string) {
    return this.http.get<any>(`https://localhost:7256/api/${word}`)

  }

  submitInformationFlight(model: any) {
    return this.http.post<any>('http://localhost:5000', {
      q: '<p class="green">Hello!</p>',
      source: "en",
      target: "es",
      format: "html"
    }, {

      headers: { "Content-Type": "application/json" }
    }


    )
  }


  async speechSynthesis(word: string) {
    await TextToSpeech.speak({
      text: word,
      lang: 'en-US',
      rate: 1.0,
      pitch: 1.0,
      volume: 1.0,
      category: 'ambient',
    });
  }



}