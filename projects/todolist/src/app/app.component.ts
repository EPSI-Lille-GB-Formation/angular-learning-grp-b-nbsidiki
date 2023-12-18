import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TODOS } from './mock-todo';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="container">
      <h1>Welcome</h1>
      <ul *ngFor="let a of this.todoList; index as i">
        <li *ngIf="!a.isCompleted">
          <span>{{ a.title }}</span>
        </li>
      </ul>
    </div>
  `,
  styles: [''],
})
export class AppComponent {
  todoList = TODOS;
  ableTodoList: Todo[] = [];

  constructor() {
    console.table(this.todoList);
  }

  selectTodo(id: number) {
    return this.todoList[id];
  }
  /*showAbleTodo(list: Todo[]) {
    list.map((todo: Todo) => {
      if (!todo.isCompleted) {
        this.ableTodoList.push(todo);
      }
    });
  }*/
}
