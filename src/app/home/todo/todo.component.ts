import { Component, OnInit, } from '@angular/core';
import { IonList, IonItemSliding, IonItemOptions, IonItemOption, IonLabel, IonItem, IonInfiniteScroll, IonInfiniteScrollContent, IonRouterOutlet, IonContent } from '@ionic/angular/standalone'
import { Observable, } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TodoService } from 'src/app/services/todo/todo.service';
import { HomePage } from '../home.page';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  standalone: true,
  imports: [IonContent, IonRouterOutlet, IonInfiniteScrollContent, IonInfiniteScroll, CommonModule, IonItem, IonLabel, IonItemOption, IonItemOptions, IonItemSliding, IonList]
})
export class TodoComponent implements OnInit {

  constructor(
    private todo: TodoService,
    private home: HomePage) {
  }
 
  data: Observable<any> = this.todo.get('todo') //getting todo with sate todo

  ngOnInit() { }

  deleteToDo(id: string) {
    this.todo.delete(id)
    this.home.toastOpened = true
    this.home.toastMessage = 'ToDo Deleted'
    this.home.toastColor = 'danger'
  }

  changeToDoState(state: string, id: any, value: string) {
    this.todo.changeState(state, id, value)
    this.home.toastOpened = true
    this.home.toastMessage = 'ToDo Started'
    this.home.toastColor = 'secondary'
  }
}
