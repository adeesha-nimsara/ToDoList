import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { IonModal, IonList, IonItemSliding, IonItemOptions, IonItemOption, IonItem, IonLabel, IonInput, IonButton, IonToolbar, IonHeader, IonTitle, IonContent, IonButtons } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
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

  constructor(private firestore: Firestore) { }

  ngOnInit() { }

  onSubmit() {
    const collectionInstance = collection(this.firestore, 'todo')
    const dataToSave = { name: this.todoText, state: 'todo' }
    addDoc(collectionInstance, dataToSave).then(() => {
      this.todoText = ''
      this.todoSubmitted.emit()
    })
  }

}
