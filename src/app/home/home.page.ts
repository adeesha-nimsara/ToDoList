import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonRouterOutlet, IonTabs, IonIcon, IonTabBar, IonTabButton, IonFab, IonFabButton, IonFabList, IonInput, IonItem, IonButton, IonModal, IonButtons, IonList, IonItemSliding, IonItemOptions, IonItemOption, IonLabel } from '@ionic/angular/standalone';
import { OverlayEventDetail } from '@ionic/core/components';
import { AddTodoComponent } from "./add-todo/add-todo.component";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [IonLabel, IonItemOption, IonItemOptions, IonItemSliding, IonList, IonButtons, IonModal, IonButton, IonItem, IonInput, IonFabList, IonFabButton, IonFab, IonTabButton, IonTabBar, IonIcon, IonTabs, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonContent, RouterOutlet, AddTodoComponent]
})
export class HomePage {
  constructor() { }

  tabName = 'ToDo'

  getTabName(name: string) {
    this.tabName = name
  }

  @ViewChild(IonModal)
  modal!: IonModal;

  name: string | undefined;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }
}
