import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import * as _mod from 'src/app/models';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-season-deatails',
  templateUrl: './season-deatails.page.html',
  styleUrls: ['./season-deatails.page.scss'],
})
export class SeasonDeatailsPage implements OnInit {
  title: string = "";
  seasons: _mod.Season[] = [];
  constructor(   private globalService: GlobalService,
    private route: ActivatedRoute,
    private nav: NavController,) { }

  ngOnInit() {
    const seasonId = this.route.snapshot.paramMap.get('seasonId');
    this.seasons = this.globalService.getAllEpisode(+seasonId!);
    this.title = `فصل ${this.seasons[0].season}`;
  }
  back()
  {
    this.nav.navigateBack(['/app/seassons']);
  }
  goToEpisods(){
    this.nav.navigateForward(['/app', this.seasons[0].number,'episods']);

  }

}
