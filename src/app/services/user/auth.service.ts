import { Injectable } from '@angular/core';
import { Auth, authState, signInAnonymously, GoogleAuthProvider, signInWithPopup, User } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  googleProvider = new GoogleAuthProvider()
  isLogedIn: boolean = false
  userData: User | null | undefined

  constructor(
    private auth: Auth,
    private router: Router
  ) {
    authState(this.auth).subscribe((response) => {
      this.userData = response
      if (response == undefined) {
        this.isLogedIn = true
        this.router.navigate(['./login'])
      } else {
        console.log(this.userData)
        this.isLogedIn = true
        this.router.navigate(['./todo'])
      }
    })
  }

  googleLoginService() {
    signInWithPopup(this.auth, this.googleProvider)
    console.log('google login')
  }

  guestLoginService() {
    console.log('guest login')
    signInAnonymously(this.auth)
  }

  signOut() {
    this.auth.signOut()
  }

  isAuthenticated() {
    return this.isLogedIn
  }

  getUser() {
    return this.userData
  }

}
