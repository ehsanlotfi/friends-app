import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as _mod from 'src/app/models';
import { GlobalService } from 'src/app/services/global.service';
@Component({
  selector: 'app-episods',
  templateUrl: './episods.page.html',
  styleUrls: ['./episods.page.scss'],
})
export class EpisodsPage implements OnInit {
  title: string = "";
  seasons: _mod.Season[] = [];
  constructor(
    private globalService:GlobalService,
    private route: ActivatedRoute,
    private nav: NavController,
  ) { }

  ngOnInit() {
    const seasonId = this.route.snapshot.paramMap.get('seasonId');
    this.seasons = this.globalService.getAllEpisode(+seasonId!);
    this.title = `فصل ${this.seasons[0].season}`;
  }
  back()
  {
    this.nav.navigateBack(['/app', this.seasons[0].number,'detail']);
  }
  goToQuotes(episode){
    this.nav.navigateForward(['/app', this.seasons[0].number,'episods', episode.number]);

  }
}
