import { Component, Input } from '@angular/core';
import { BorderHighlightDirective } from '../border-highlight.directive';
import { CommonModule } from '@angular/common';
import { Todo } from '../todo';
import { FormsModule } from '@angular/forms';
import { TODOS } from '../mock-todo';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'edit-todo',
  standalone: true,
  imports: [BorderHighlightDirective, CommonModule, FormsModule],
  template: `<div>
    <h2>Mise à Jour Todo</h2>
    <form (ngSubmit)="updateTodo()" #todoForm="ngForm">
      <div>
        <label for="title">Titre:</label>
        <input
          type="text"
          id="title"
          name="title"
          [(ngModel)]="todo.title"
          required
        />
      </div>
      <div>
        <label for="content">Contenu:</label>
        <textarea
          id="content"
          name="content"
          [(ngModel)]="todo.content"
          required
        ></textarea>
      </div>
      <div>
        <label for="author">Auteur:</label>
        <input
          type="text"
          id="author"
          name="author"
          [(ngModel)]="todo.author"
          required
        />
      </div>
      <div>
        <label for="isCompleted">Terminé:</label>
        <input
          type="checkbox"
          id="isCompleted"
          name="isCompleted"
          [(ngModel)]="todo.isCompleted"
        />
      </div>
      <button type="submit">Mettre à Jour</button>
    </form>
  </div> `,
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
export class editComponent {
  todo: Todo = new Todo(0, '', '', '', false, new Date(), null);
  todoId: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private updateService: TodoService
  ) {}

  ngOnInit(): void {
    this.todoId = this.route.snapshot.paramMap.get('id');
  }
  updateTodo(): void {
    this.updateService.editTodoById(this.todoId, this.todo).subscribe(
      (response) => {
        console.log('Mise à jour réussie', response);
      },
      (error) => {
        console.error('Erreur lors de la mise à jour', error);
      }
    );
  }
}
