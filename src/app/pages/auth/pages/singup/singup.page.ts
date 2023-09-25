import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})
export class SingupPage implements OnInit {
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
    private auth: AuthService,
    private nav: NavController,
    private alertCtrl:AlertController,
    private loading:LoadingController
  ) {
    this.validationFormUser = this.formbuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      names: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      Phone: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    })

  }

  ngOnInit() {
  }
  SingUpUser(value) {
  
    try {
      this.presentLoading().then(() => {
        this.auth.userRegistration(value).then(res => {
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
            this.nav.navigateBack(['auth/auth/singup']);
          }
        }
      ]
    });
    load.present();
  }
}
