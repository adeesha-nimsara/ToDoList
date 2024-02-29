import { Component, OnInit, } from '@angular/core';
import { IonList, IonItemSliding, IonItemOptions, IonItemOption, IonLabel, IonItem, IonContent } from '@ionic/angular/standalone'
import { Observable, } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TodoService } from 'src/app/services/todo/todo.service';
import { HomePage } from '../home.page';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, IonItem, IonLabel, IonItemOption, IonItemOptions, IonItemSliding, IonList]
})
export class CompleteComponent implements OnInit {

  constructor(
    private todo: TodoService,
    private home: HomePage) { }

  data: Observable<any> = this.todo.get('complete')

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
    this.home.toastMessage = 'Working ToDo'
    this.home.toastColor = 'primary'
  }
}
