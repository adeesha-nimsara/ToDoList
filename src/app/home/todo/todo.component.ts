import { Component, OnInit, } from '@angular/core';
import { IonList, IonItemSliding, IonItemOptions, IonItemOption, IonLabel, IonItem } from '@ionic/angular/standalone'
import { Firestore, collection, collectionData, doc } from '@angular/fire/firestore';
import { Observable, } from 'rxjs';
import { CommonModule } from '@angular/common';
import { deleteDoc } from 'firebase/firestore';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  standalone: true,
  imports: [CommonModule, IonItem, IonLabel, IonItemOption, IonItemOptions, IonItemSliding, IonList]
})
export class TodoComponent implements OnInit {

  data!: Observable<any>

  constructor(
    private firestore:Firestore,) { 
    this.getToDo();
  }

  ngOnInit() { }

  getToDo(){
    const collectionInstance = collection(this.firestore, 'todo')
    this.data = collectionData(collectionInstance, {idField: 'id'})
  }

  deleteToDo(id:string){
    const docInstance = doc(this.firestore, 'todo', id)
    deleteDoc(docInstance)
  }
}
