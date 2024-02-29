import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonToggle, IonList, IonNote, IonTextarea, IonItemSliding, IonItemOptions, IonItemOption, IonLabel, IonItem, IonInfiniteScroll, IonInfiniteScrollContent, IonRouterOutlet, IonContent, IonInput, IonButton, IonIcon } from '@ionic/angular/standalone'
import { AuthService } from 'src/app/services/user/auth.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonContent, IonList, IonItem, IonInput, IonToggle, IonLabel, IonNote, IonTextarea]
})
export class SettingsComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() { }

  logOut(){
    this.auth.signOut()
  }

}
