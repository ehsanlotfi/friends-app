import { Component, OnInit } from '@angular/core';
import { LightnerService } from 'src/app/services/lightner.service';
import { SwiperOptions } from 'swiper/types';
import * as _mod from 'src/app/models';

@Component({
  selector: 'app-quick-study',
  templateUrl: './quick-study.page.html',
  styleUrls: ['./quick-study.page.scss'],
})
export class QuickStudyPage implements OnInit {
  swiperEl: any;
  listWord :_mod.Lightner[];

 colors: _mod.Colors = {
  keep: '#a2d2ff',
  temporary: '#ffb703',
  forget: '#ef233c'
  }
  constructor(private lightnerService: LightnerService,) { }

  ngOnInit() {
    this.lightnerService.getListLightner().then(list => {
      this.listWord = list;
      this.initialize();
    });
 
  }
  initialize() {
    setTimeout(() => {
      // swiper element
      this.swiperEl = document.getElementById('swiper_study') as any;

      // swiper parameters
      const swiperParams: SwiperOptions = {
        effect: 'cards',
        grabCursor:true,
        autoplay:{
          delay:3000,
          disableOnInteraction:false,
          pauseOnMouseEnter:true,
          waitForTransition:true
        },
        on: {
          slideChange: (row) => {

          }
        }

      };

      // now we need to assign all parameters to Swiper element
      Object.assign(this.swiperEl, swiperParams);

      // and now initialize it
      this.swiperEl.initialize();
    }, 100);

  }
}
