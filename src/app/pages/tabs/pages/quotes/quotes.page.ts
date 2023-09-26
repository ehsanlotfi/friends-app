import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonModal, ModalController, NavController } from '@ionic/angular';
import * as _mod from 'src/app/models';
import { GlobalService } from 'src/app/services/global.service';
import { LightnerService } from 'src/app/services/lightner.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  seasonId: number;
  episodeId: number;
  wordSelected: string;
  title: string = "";
  segId: string = "en"
  quotes: _mod.Quote[] = [];
  presentModel: any;
  private _quoteID: number;
  existenceWord:boolean=false;
  constructor(
    private globalService: GlobalService,
    private nav: NavController,
    private route: ActivatedRoute,
 private lightnerService:LightnerService
  ) { }

  ngOnInit(): void {
    this.seasonId = +this.route.snapshot.paramMap.get('seasonId')!;
    this.episodeId = +this.route.snapshot.paramMap.get('episodeId')!;
    this.title = `فصل ${this.seasonId} قسمت ${this.episodeId}`;
    this.getData();
  }
  getData() {
    this.globalService.getAllQuote(this.seasonId, this.episodeId).subscribe(data => {
      this.quotes = data.map(f => {
        f.Content = f.Content.split(' ').map(t => {
          return '<span>' + t + '</span>'
        }).join(' ')
        return f;
      });
    });

  }

  setLeitnerCard(quote: _mod.Quote) {
    quote.CntSeen = 1;
    this.globalService.setLeitnerCard(quote.ID).subscribe();
  }

  back() {
    this.nav.navigateBack(['/app', this.seasonId]);
  }

  clickSpan(input, e: MouseEvent, quoteID) {
    this._quoteID = quoteID;
    if ((e.target as HTMLElement).tagName === 'SPAN') {
      let target = e.target as HTMLElement;
      this.wordSelected = target.innerHTML
      this.modal.present();
      this.existenceWord = this.lightnerService.WordLightner.some(f => f.en === this.wordSelected);
     
    }
  }
  addWord(word) {
      this.lightnerService.WordLightner.push({
        en: word,
        fa: 'مدنوم ولی نمگم',
        IdQuote: this._quoteID,
        seasonId: this.seasonId,
      });
      this.lightnerService.setLightner(this.lightnerService.WordLightner)
    this.modal.dismiss(word, 'confirm');
  }


  dismiss() {
    this.modal.dismiss(null, 'dismiss');
  }
}
