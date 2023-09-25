import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.page.html',
  styleUrls: ['./login-screen.page.scss'],
})
export class LoginScreenPage implements OnInit {
  email = '30sharp.alireza@gmail.com';
  password = '1370707070';
  validationFormUser: FormGroup;
  validationUserMessage = {
    email: [
      { type: 'required', message: 'Plase enter your Email' },
      { type: 'pattern', message: 'The Email entred is Incorrect.Try again' }
    ],
    password: [
      { type: 'required', message: 'Plase enter your Password' },
      { type: 'minlength', message: 'Plase enter your minLength' },
    ]
  }
  constructor(public formbuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
    private loading: LoadingController,
    private _fireStroe: AngularFirestore,
    private _navCtrl:NavController
  ) { }

  ngOnInit() {
    this.validationFormUser = this.formbuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    })
  }
  async loginUser(value: any) {
    try {
      this.presentLoading().then(() => {
        this.auth.loginFireAuth(value).then(res => {
          debugger
          if (res.user) {
            this.auth.setUser({
              uid:res.user.uid,
              username:res.user.displayName,
            })
            const userProfile =  this._fireStroe.collection('profile').doc(res.user.uid);
            userProfile.get().subscribe(user => {
              if (user.exists) {
                this._navCtrl.navigateForward(['tabs'])
              }
              else
              {
                this._fireStroe.doc(`profile/${this.auth.getUserUid()}`).set({
                  name:res.user.displayName,
                  email:res.user.email,

                })
              }

            });
          }


          this.loading.dismiss();
        this._navCtrl.navigateForward(['tabs'])
          //  this.router.navigate(['tabs'])
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
async setCollectionUser()
{
  
}

  async presentLoading() {
    const loading = await this.loading.create({
      message: 'Please Wait ..'

    });
    await loading.present()
  }
  async errorLoading(message) {
    let load = await this.alertCtrl.create({
      header: 'Error Registering',
      message: message,
      buttons: [
        {
          text: 'ok',
          handler: () => {
            this.router.navigate(['singup'])

          }
        }
      ]
    });
    load.present();
  }
}
