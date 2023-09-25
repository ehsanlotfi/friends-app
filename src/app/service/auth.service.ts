import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavController } from '@ionic/angular';
import { IUser } from '../models/user.model';
// import * as firebase from "firebase/app";
// import "firebase/auth";
//import firebase from 'firebase'  ;
require('firebase/auth')
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: IUser
  constructor(public auth: AngularFireAuth,

  ) {

    //this.auth = firebase.auth;
  }

  loginFireAuth(value) {
    return new Promise<any>((resolve, reject) => {
      this.auth.signInWithEmailAndPassword(value.email, value.password)
        .then((res) => {

          resolve(res)
          // Sign up successful
        })
        .catch((error) => {
          reject(error)
        });

    });

  }
  userRegistration(value) {
    return new Promise<any>((resolve, reject) => {
      this.auth.createUserWithEmailAndPassword(value.email, value.password)
        .then((res) => {
          resolve(res)
          // Sign up successful
        })
        .catch((error) => {
          reject(error)
        });

    });

  }

  userResetPassword(value) {
    return new Promise<any>((resolve, reject) => {
      this.auth.sendPasswordResetEmail(value.email, value.password)
        .then((res) => {
          resolve(res)
          // Sign up successful
        })
        .catch((error) => {
          reject(error)
        });

    });

  }
  logout() {

    return new Promise<any>((resolve, reject) => {
      this.auth.signOut()
        .then(() => {
          resolve(true)
        })
        .catch((error) => {
          reject(error)
        });

    });
  }
  setUser(user: IUser) {
    this.user = user;
  }
  getUser():IUser{
    return this.user;
  }
  getUserUid():string{
    return this.user.uid;
  }
}
