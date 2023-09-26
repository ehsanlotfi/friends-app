import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import * as _mod from 'src/app/models';
import { GlobalService } from 'src/app/services/global.service';


@Component({
  selector: 'app-seassons',
  templateUrl: './seassons.page.html',
  styleUrls: ['./seassons.page.scss'],
})
export class SeassonsPage implements OnInit {
  seasons: _mod.Season[] = [];
  constructor(private globalService: GlobalService,
    private nav: NavController,
    ) { }

  ngOnInit() {
    this.seasons = this.globalService.getAllSeasons();
    console.table( this.seasons)

  }

  goToDetail(season){
this.nav.navigateForward(['/app', season.number,'detail'])
  }
}
