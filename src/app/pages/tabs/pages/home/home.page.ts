import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( private auth: AuthService,
    private alertCtrl:AlertController,
    private loading:LoadingController,
    private nav: NavController
    ) { }

  ngOnInit() {
  }
  logout() {
    try {
      this.presentLoading().then(() => {
        this.auth.logout().then(res => {  
            this.loading.dismiss();
            this.nav.navigateBack(['auth/auth/login']);
          
        }).catch(error => {
          this.loading.dismiss();
          this.errorLoading(error.message)
        })
      });
  
    }
    catch (error) {
      this.loading.dismiss();
      this.errorLoading(error.message)

    }

  }

  async presentLoading() {
    const loading = await this.loading.create({
      message: 'Please Wait ..'

    });
    await loading.present()
  }
  async errorLoading(message){
    let load=await this.alertCtrl.create({
      header:'Error Registering',
      message:message,
      buttons:[
        {
          text:'ok',
          handler:()=>{
            this.nav.navigateBack(['auth/auth/login']);
          }
        }
      ]
    });
    load.present();
  }
}
