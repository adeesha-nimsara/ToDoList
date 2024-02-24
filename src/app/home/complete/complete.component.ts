import { Component, OnInit, } from '@angular/core';
import { IonList, IonItemSliding, IonItemOptions, IonItemOption, IonLabel, IonItem } from '@ionic/angular/standalone'
import { Observable, } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TodoService } from 'src/app/services/todo/todo.service';


@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss'],
  standalone: true,
  imports: [CommonModule, IonItem, IonLabel, IonItemOption, IonItemOptions, IonItemSliding, IonList]
})
export class CompleteComponent implements OnInit {

  constructor(private todo: TodoService) { }

  data: Observable<any> = this.todo.get('complete')

  ngOnInit() { }

  deleteToDo(id: string) {
    this.todo.delete(id)
  }

  changeToDoState(state: string, id: any, value: string) {
    this.todo.changeState(state, id, value)
  }
}
