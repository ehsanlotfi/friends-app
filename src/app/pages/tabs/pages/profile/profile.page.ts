import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private fireAuth: AngularFireAuth,
    private database:AngularFirestore,
   private auth: AuthService
    ) {


   }

  ngOnInit() {
    this.fireAuth.onAuthStateChanged(user => {
      debugger
    if (user) {
   let userProfile=  this.database.doc(`/profile/${user.uid}`);
   userProfile.get().subscribe(profile=>{
    console.table(profile)
   })
    }
    else
    {
      
    }

  });
  }

}
