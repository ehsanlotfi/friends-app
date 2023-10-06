import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SpeechRecognition } from '@capacitor-community/speech-recognition';
import { IonModal, ModalController } from '@ionic/angular';
import { LightnerService } from 'src/app/services/lightner.service';
import { Navigation } from 'swiper/modules';
import * as _mod from 'src/app/models';
@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit, OnDestroy {
  wordSelected = "Hello";
  swiperEl: any;
  @ViewChild(IonModal) modal: IonModal;
  @ViewChild(IonModal) modalNode: IonModal;
  listWord :_mod.Lightner[];
  wordSelectUserData = [];
  activeRow: any;
  initialBreakpoint = 0;
  backdropBreakpoint = 0.25;
  recording: boolean = false
  invalidRecognition: boolean = false;
  validRecognition: boolean = false;
  isAvailable: boolean = false;
  isNewNode: boolean = false;
  node: string = ""
  Speek: any;
  segId: string = "translate";
data:any;
  constructor(private lightnerService: LightnerService,
    private modalCtrl: ModalController,

  ) {
  }
  ngOnInit() {
    this.lightnerService.getListLightner().then(list => {
      this.listWord = list;
      this.activeRow = this.listWord[0];
      this.wordSelectUserData = this.activeRow.CleanText.split(' ')
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
  openModal(type: string) {
    this.modal.dismiss();
    this.initialBreakpoint = 1;
    setTimeout(() => {
      this.segId = type;
      this.modal.present();
    }, 10)
  }
  NewNode() {
    this.isNewNode = true;

  }
  remember() {
    this.swiperEl.swiper.slideNext();
  }
  initialize() {
    setTimeout(() => {
      // swiper element
      this.swiperEl = document.getElementById('swiper_review') as any;

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
            this.wordSelectUserData = [];
            //   this.activeRow.wordSelectUser ="";
            this.wordSelectUserData = this.activeRow.CleanText.split(' ')
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
    SpeechRecognition.removeAllListeners();
    this.modalCtrl.dismiss()
  }

  async startRecognition(word) {
    this.recording = true;
    this.invalidRecognition = false;
    this.validRecognition = false;
    this.Speek = "";
    SpeechRecognition.start({
      language: "en-US",
      partialResults: true,
      popup: false,
      maxResults: 1,
      
    });
    SpeechRecognition.addListener("partialResults", (data: any) => {
      if (data.matches && data.matches.length > 0) {
        this.Speek = data.matches[0].toLocaleLowerCase();
        if (word.toLocaleLowerCase() != data.matches[0].toLocaleLowerCase()) {
          this.invalidRecognition = true;
          this.validRecognition = false;
          this.activeRow.startSound=false;
        }
        else {
          this.invalidRecognition = false;
          this.validRecognition = true;
          this.activeRow.startSound=true;
        }
      }
    });
  }
  async stopRecognition() {
    this.recording = false;
    await SpeechRecognition.stop();
    SpeechRecognition.removeAllListeners();
  }

  segmentChanged(ev: any) {
    this.segId = ev.detail.value;

  }

  insertNode() {
    this.activeRow.Node = this.node;
    this.isNewNode = false;

  }
  editNode() {
    this.isNewNode = true;
    this.node = this.activeRow.Node;
  }

  changeInputTest(e: any, word: _mod.Lightner) {
    this.removeAllIncorrectclass();
    word.starTranslate = !word.starTranslate;
    //document.querySelector('incorrect').remove("incorrect");
    setTimeout(() => {
      if (e.target.value == word.fa) {
        word.starTranslate = true;
      }
      else {
        word.starTranslate = false;
      }
    }, 1);
  }

  speechTestCleanText(text: string) {
    this.lightnerService.speechSynthesis(text);
  }
  clickWordUser(word: string) {
    this.activeRow.wordSelectUser += ' ' + word;
    this.activeRow.wordSelectUser = this.activeRow.wordSelectUser.trim();

  }
  onButtonWordsClick($event: any) {
    let clickedElement = $event.target || $event.srcElement;
    if (clickedElement.nodeName === "ION-BUTTON") {
      let isCertainButtonAlreadyActive = clickedElement.classList.contains('ion-color-warning');
      if (isCertainButtonAlreadyActive) {
        //isCertainButtonAlreadyActive.classList.remove("active");
        clickedElement.color = "primary";
        const regex = new RegExp(clickedElement.innerText, 'g');
        this.activeRow.wordSelectUser = this.activeRow.wordSelectUser.replace(regex, '');
      }
      else {
        // clickedElement.className += " active";
        clickedElement.color = "warning";
        if (this.activeRow.wordSelectUser) {
          this.activeRow.wordSelectUser += ' ' + clickedElement.innerText;
        }
        else {
          this.activeRow.wordSelectUser = ' ' + clickedElement.innerText;
        }
        this.activeRow.wordSelectUser = this.activeRow.wordSelectUser.trim();
      }
    }
    if (this.activeRow.wordSelectUser?.length >= this.activeRow?.CleanText?.length) {
      this.checkWordsSelectedOfLightner();
    }
  }
  checkWordsSelectedOfLightner() {
    this.removeAllIncorrectclass();
    this.activeRow.starWriting = !this.activeRow.starWriting;
    setTimeout(() => {
      if (this.activeRow?.CleanText === this.activeRow.wordSelectUser) {
        this.activeRow.starWriting = true;
      }
      else {
        this.activeRow.starWriting = false;
      }
    }, 1)
  }

  clearClassBtn() {
    this.activeRow.wordSelectUser = "";
    this.activeRow.starWriting = false;
    document.querySelectorAll('.ion-color-warning').forEach(e => {
      (e as any).color = 'primary';
    });
  }

  removeAllIncorrectclass() {
    document.querySelectorAll('.incorrect').forEach(e => {
      e.classList.remove('incorrect');
    });
  }
}
