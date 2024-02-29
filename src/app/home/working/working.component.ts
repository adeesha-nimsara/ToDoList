import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonList, IonItemSliding, IonItemOptions, IonItemOption, IonLabel, IonItem, IonContent } from '@ionic/angular/standalone'
import { Observable, } from 'rxjs';
import { TodoService } from 'src/app/services/todo/todo.service';
import { HomePage } from '../home.page';
@Component({
  selector: 'app-working',
  templateUrl: './working.component.html',
  styleUrls: ['./working.component.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, IonItem, IonLabel, IonItemOption, IonItemOptions, IonItemSliding, IonList]
})
export class WorkingComponent implements OnInit {

  constructor(
    private todo: TodoService,
    private home: HomePage) { }

  data: Observable<any> = this.todo.get('working')

  ngOnInit() { }


  changeToDoState(state: string, id: any, value: string) {
    this.todo.changeState(state, id, value)
    if (state == 'complete') {
      this.home.toastOpened = true
      this.home.toastMessage = 'ToDo Completed'
      this.home.toastColor = 'primary'
    } else if (state == 'todo') {
      this.home.toastOpened = true
      this.home.toastMessage = 'ToDo Stop'
      this.home.toastColor = 'primary'
    }
  }
}
