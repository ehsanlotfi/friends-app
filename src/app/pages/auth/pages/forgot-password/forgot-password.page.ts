import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  validationUserMessage = {
    names: [{ type: 'required', message: 'Plase enter your Full Name' }],

    Phone: [{ type: 'required', message: 'Plase enter your Phone No' }],
    email: [
      { type: 'required', message: 'Plase enter your Email' },
      { type: 'pattern', message: 'The Email entred is Incorrect.Try again' }
    ],
    password: [
      { type: 'required', message: 'Plase enter your Password' },
      { type: 'minlength', message: 'Plase enter your minLength' },
    ]

  }
  validationFormUser: FormGroup;
  constructor(public formbuilder: FormBuilder,
    private alertCtrl:AlertController,
    private loading:LoadingController,
    private auth: AuthService,
    private nav: NavController,
    ) {

      this.validationFormUser = this.formbuilder.group({
        email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
    
      })
     }

  ngOnInit() {
  }

  ResetPassword(value) {
    try {
      this.presentLoading().then(() => {
        this.auth.userResetPassword(value).then(res => {
          if (res.user) {
            res.user.updateProfile({
              displayName: value.names,
              phoneNumber: value.Phone,
              email: value.email
            });
            this.loading.dismiss();
            this.nav.navigateBack(['auth/auth/login']);
          
          }
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
