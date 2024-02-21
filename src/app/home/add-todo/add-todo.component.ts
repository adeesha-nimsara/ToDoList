import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, IonList, IonItemSliding, IonItemOptions, IonItemOption, IonItem, IonLabel, IonInput, IonButton, IonToolbar, IonHeader, IonTitle, IonContent, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
  standalone: true,
  imports: [IonModal, IonButtons, IonContent, IonTitle, IonHeader, IonToolbar, IonButton, IonInput, IonLabel, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonList]
})
export class AddTodoComponent  implements OnInit {

  @ViewChild(IonModal)
  modal!: IonModal;
  
  constructor() { }

  ngOnInit() {}


  confirm() {
    this.modal.dismiss('confirm');
  }
}
