import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { IonModal, IonList, IonItemSliding, IonItemOptions, IonItemOption, IonItem, IonLabel, IonInput, IonButton, IonToolbar, IonHeader, IonTitle, IonContent, IonButtons } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { addDoc, collection, doc, Firestore } from '@angular/fire/firestore';
import { HomePage } from '../home.page';
import { AuthService } from 'src/app/services/user/auth.service';
import { user } from '@angular/fire/auth';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
  standalone: true,
  imports: [FormsModule, IonModal, IonButtons, IonContent, IonTitle, IonHeader, IonToolbar, IonButton, IonInput, IonLabel, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonList]
})
export class AddTodoComponent implements OnInit {
  @Output() todoSubmitted: EventEmitter<any> = new EventEmitter<any>();

  todoText: any;

  constructor(
    private firestore: Firestore,
    private home: HomePage,
    private auth: AuthService) { }

  ngOnInit() { }

  /**
   * The onSubmit function adds a new todo item to a Firestore collection and emits an event while
   * displaying a success toast message.
   */
  onSubmit() {
    const user = this.auth.getUser() //retrieving the current user object from the `AuthService` service
    const userId = user ? user.uid.toString() : '' 
    const userCollection = collection(this.firestore, 'users')
    const userSubcollectionRef = collection(userCollection, userId, 'todo') //Add current user uid as firestore document name
    const dataToSave = { name: this.todoText, state: 'todo' }
    addDoc(userSubcollectionRef, dataToSave).then(() => {
      this.todoText = ''
      this.todoSubmitted.emit()
      this.home.toastOpened = true
      this.home.toastMessage = 'ToDo Added'
      this.home.toastColor = 'success'
    })
  }

}
