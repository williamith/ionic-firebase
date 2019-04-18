import { User } from './user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userIsAuthenticated = false;

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    this.angularFireAuth.authState.subscribe((user: firebase.User) => {
      if (user) {
        console.log("The user is logged in!");

      } else {
        console.log("The user is not logged in!");
      }
      return;
    });
  }

  getUserIsAuthenticated() {
    return this.userIsAuthenticated;
  }

  async login(user: User) {
    try {
      var x = await this.angularFireAuth.auth.signInWithEmailAndPassword(
        user.email,
        user.password
      );
      if (x) {
        this.userIsAuthenticated = true;
        console.log("Successfully logged in!");
        this.router.navigate(['app', 'announcements']);
      }
    }
    catch (err) {
      console.error(err);
    }
  }

  logout() {
    this.angularFireAuth.auth.signOut()
      .then(() => {
        this.userIsAuthenticated = false;
      });
  }
}
