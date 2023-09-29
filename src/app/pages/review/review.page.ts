import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SpeechRecognition } from '@capacitor-community/speech-recognition';
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
export class ReviewPage implements OnInit, OnDestroy {
  wordSelected = "Hello";
  swiperEl: any;
  @ViewChild(IonModal) modal: IonModal;
  listWord = [];
  activeRow: any;
  initialBreakpoint = 0.25;
  backdropBreakpoint = 0.25;
  recording: boolean = false
  invalidRecognition: boolean = false;
  validRecognition: boolean = false;
  isAvailable: boolean = false;
  Speek:any;
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

    this.initRecognition();
  }
  async initRecognition() {
    const { available } = await SpeechRecognition.available();
    if (available) {
      this.isAvailable = true;
      SpeechRecognition.requestPermissions();
    }
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
            this.speechSynthesis(this.activeRow.en);
          }
        }

      };

      // now we need to assign all parameters to Swiper element
      Object.assign(this.swiperEl, swiperParams);

      // and now initialize it
      this.swiperEl.initialize();
    }, 100);

  }

  speechSynthesis(word: string) {
    this.lightnerService.speechSynthesis(word);
  }
  ngOnDestroy(): void {
    this.modalCtrl.dismiss()
  }

  async startRecognition(word) {
    this.recording = true;
    this.invalidRecognition = false;
    this.validRecognition=false;
    this.Speek="";
    const { available } = await SpeechRecognition.available();
    if (available) {
      SpeechRecognition.start({
        language: "en-US",
        maxResults: 4,
        //prompt: "Say something",
        partialResults: true,
        popup: false,
      });
      SpeechRecognition.addListener("partialResults", (data: any) => {
        if (data.matches && data.matches.length > 0) {
          this.Speek=data.matches[0].toLocaleLowerCase();
          if (word.toLocaleLowerCase()  != data.matches[0].toLocaleLowerCase()) {
            this.invalidRecognition = true;
            this.validRecognition=false;
          }
          else {
            this.invalidRecognition = false;
            this.validRecognition=true;
          }
        }
      });

    }

  }
  async stopRecognition() {
    this.recording = false;
    await SpeechRecognition.stop();
  }


}
