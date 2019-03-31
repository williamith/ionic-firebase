import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { FirebaseService } from './../firebase/firebase.service';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private firebaseService: FirebaseService,
    private angularFireAuth: AngularFireAuth
  ) {}

  register(value: any){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
   }
 
   login(value: any){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
   }
 
   logout(){
     return new Promise((resolve, reject) => {
       this.angularFireAuth.auth.signOut()
       .then(() => {
         this.firebaseService.unsubscribeOnLogOut();
         resolve();
       }).catch((error) => {
         reject();
       });
     })
   }
}
