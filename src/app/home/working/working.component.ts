import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonList, IonItemSliding, IonItemOptions, IonItemOption, IonLabel, IonItem } from '@ionic/angular/standalone'
import { Observable, } from 'rxjs';
import { TodoService } from 'src/app/services/todo/todo.service';
@Component({
  selector: 'app-working',
  templateUrl: './working.component.html',
  styleUrls: ['./working.component.scss'],
  standalone: true,
  imports: [CommonModule, IonItem, IonLabel, IonItemOption, IonItemOptions, IonItemSliding, IonList]
})
export class WorkingComponent implements OnInit {

  constructor(private todo: TodoService) { }

  data: Observable<any> = this.todo.get('working')
  
  ngOnInit() { }

  deleteToDo(id: string) {
    this.todo.delete(id)
  }

  changeToDoState(state: string, id: any, value: string) {
    this.todo.changeState(state, id, value)
  }
}
