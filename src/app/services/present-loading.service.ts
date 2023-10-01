import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PresentLoadingService {

  constructor(
    private alertCtrl: AlertController,
    private loading: LoadingController,
  ) { }

  async presentLoading() {
    const loading = await this.loading.create({
      message: 'لطفا کمی صبر کنید ..'

    });
    await loading.present()
  }
  async errorLoading(message) {
    let load = await this.alertCtrl.create({
      header: 'خطا',
      message: message,
      buttons: [
        {
          text: 'ok',
          handler: () => {
          }
        }
      ]
    });
    load.present();
  }
}
