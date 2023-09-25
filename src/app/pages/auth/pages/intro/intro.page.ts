import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }
  goToLogin() {

    this.nav.navigateForward(['auth/auth/login']);
  }
  goToSingUp() {
    this.nav.navigateForward(['auth/auth/singup']);
  }

}
