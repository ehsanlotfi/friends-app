import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { LightnerService } from 'src/app/services/lightner.service';
import { register } from 'swiper/element/bundle';
import { Navigation } from 'swiper/modules';
register();
@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit ,OnDestroy{
  wordSelected = "Hello";
  swiperEl: any;
  @ViewChild(IonModal) modal: IonModal;
  listWord = [];
  activeRow: any;
  initialBreakpoint = 0.25;
  backdropBreakpoint = 0.25;
  constructor(private lightnerService: LightnerService,
    private modalCtrl: ModalController
  ) {

  }
  ngOnInit() {
    this.lightnerService.getListLightner().then(list => {
      this.listWord = list;
      this.activeRow = this.listWord[0];
      this.initialize()
    });
  }
  dismiss() {
    this.modal.dismiss(null, 'dismiss');
  }
  openModal() {
    this.initialBreakpoint = 1;
    this.backdropBreakpoint = 1;
    this.modal.present();
  }
  remember() {
    this.swiperEl.swiper.slideNext();
  }
  initialize() {
    setTimeout(() => {
      // swiper element
      this.swiperEl = document.querySelector('swiper-container') as any;

      // swiper parameters
      const swiperParams = {
        slidesPerView: 1,
        navigation: true,
        breakpoints: {
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
        on: {
          slideChange: (row) => {
            this.activeRow = this.listWord[row.activeIndex];
          }
        }

      };

      // now we need to assign all parameters to Swiper element
      Object.assign(this.swiperEl, swiperParams);

      // and now initialize it
      this.swiperEl.initialize();
    }, 100);

  }


  ngOnDestroy(): void {
    this.modalCtrl.dismiss()
    }
}
