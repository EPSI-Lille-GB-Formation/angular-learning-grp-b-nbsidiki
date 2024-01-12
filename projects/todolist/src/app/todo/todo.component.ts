import { Component, Input } from '@angular/core';
import { BorderHighlightDirective } from '../border-highlight.directive';
import { CommonModule } from '@angular/common';
import { Todo } from '../todo';
import { FormsModule } from '@angular/forms';
import { TODOS } from '../mock-todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [BorderHighlightDirective, CommonModule, FormsModule],
  template: `
    <article border-highlight>
      <div class="grid">
        <label for="todo-{{ todo.id }}">
          <input
            type="checkbox"
            id="todo-{{ todo.id }}"
            name="todo-{{ todo.id }}"
            [(ngModel)]="todo.isCompleted"
          />
          {{ todo.title }}
        </label>
        <div class="action">
          <a (click)="editTodo(todo.id)">Edit</a>
          <a href="#" (click)="deleteTodo()">Delete</a>
        </div>
      </div>
    </article>
  `,
  styles: [
    `
      .action {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
      }
    `,
  ],
})
export class TodoComponent {
  constructor(private router: Router) {}
  @Input('value')
  todo!: Todo;
  checkboxValue!: boolean;

  @Input('listTodo')
  todoList!: Todo[];

  editTodo(id: number) {
    this.router.navigate(['/edit', id]);
  }
  deleteTodo() {
    TODOS.splice(this.todoList.indexOf(this.todo), 1);
  }
}
