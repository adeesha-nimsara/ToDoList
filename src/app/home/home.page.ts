import { Component, ViewChild } from '@angular/core';
import { NavigationEnd, RouterOutlet } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonRouterOutlet, IonTabs, IonIcon, IonTabBar, IonTabButton, IonFab, IonFabButton, IonFabList, IonInput, IonItem, IonButton, IonModal, IonButtons, IonList, IonItemSliding, IonItemOptions, IonItemOption, IonLabel, IonToast, IonFooter } from '@ionic/angular/standalone';
import { AddTodoComponent } from "./add-todo/add-todo.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonFooter, IonToast, IonLabel, IonItemOption, IonItemOptions, IonItemSliding, IonList, IonButtons, IonModal, IonButton, IonItem, IonInput, IonFabList, IonFabButton, IonFab, IonTabButton, IonTabBar, IonIcon, IonTabs, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonContent, RouterOutlet, AddTodoComponent]
})
export class HomePage {
  @ViewChild(IonModal)
  modal!: IonModal;

  constructor(private router: Router) {
    this.checkRouter()
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkRouter();
      }
    });
  }

  name: string | undefined;
  tabName = 'ToDo'
  toastOpened = false
  toastMessage = ''
  toastColor = ''
  isFabopen = true
  isModalOpen = false;

  getTabName(name: string) {
    this.tabName = name
  }

  hideModal() {
    this.modal.dismiss(this.name, 'confirm');
  }

  toastDismiss() {
    this.toastOpened = false
    this.toastMessage = ''
    this.toastColor = ''
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  checkRouter() {
    const currentRoute = this.router.url
    if (currentRoute === '/settings') {
      this.isFabopen = false
    } else {
      this.isFabopen = true
    }
  }
}
