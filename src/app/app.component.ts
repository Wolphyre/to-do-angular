import { Component, OnInit } from '@angular/core';
import { timestamp } from 'rxjs';
import { TodoClass, TodoPriority } from './model/todo-class';
import { TodoInterface } from './model/todo-interface';
// import { fromPriorityToColor, fromPriorityToDesc, TodoInterface } from './model/todo-interface';
import { TODOS, TODOS_I } from './model/todos-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'to-do-angular';
  todosArray: TodoClass[]

constructor(){
  this.todosArray = TODOS
}

  ngOnInit(): void {
    console.log(TodoClass);
  }
  
  // getCorrectDate(timeStamp: number): Date{
  //   const milliseconds = timeStamp * 1000;
  //   return new Date(milliseconds)
  // }

  // getDescription(priority: TodoPriority){
  //   fromPriorityToDesc(priority)
  // }
  // getColor(priority: TodoPriority){
  //   return fromPriorityToColor(priority)
  // }
  
}
