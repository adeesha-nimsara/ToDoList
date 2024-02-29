import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Auth, GoogleAuthProvider, getRedirectResult, signInAnonymously, signInWithRedirect } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { AuthService } from '../services/user/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  constructor(
    private auth: Auth,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  guestLogin() {
    this.authService.guestLoginService()
  }

  googleLogin() {
    this.authService.googleLoginService()
  }
}
