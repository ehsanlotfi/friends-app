import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as _mod from 'src/app/models';

@Component({
  selector: 'app-episod-list',
  templateUrl: './episod-list.component.html',
  styleUrls: ['./episod-list.component.scss'],
})
export class EpisodListComponent  implements OnInit {
  seasons: _mod.Season ;
  @Input() set Season(list:_mod.Season ){
    this.seasons=list;
  }
  constructor(  private nav: NavController) { }
  goToQuotes(episode){
    this.nav.navigateForward(['/app', this.seasons.number,'episods', episode.number]);
  }
  ngOnInit() {}

}
