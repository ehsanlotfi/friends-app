import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { INTRO_KEY } from 'src/app/guards/intro.guard';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  swiperEl: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.initialize()
  }
  next(){
    this.swiperEl.swiper.slideNext();
  }
 async start(){
    await Preferences.set({ key: INTRO_KEY, value: 'true' });
		this.router.navigateByUrl('/', { replaceUrl: true });
  }
  initialize() {
    setTimeout(() => {
      // swiper element
      this.swiperEl = document.querySelector('swiper-container') as any;
    });
  }
}
