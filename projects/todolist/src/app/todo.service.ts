import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { TODOS } from './mock-todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosUrl: string = 'api/todos';
  constructor(private http: HttpClient) {}

  getTodoList(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl).pipe(
      tap((todoList) => console.log(todoList)),
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }

  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.todosUrl}/${id}`).pipe(
      catchError((error) => {
        console.log(error);
        return of();
      })
    );
  }
  editTodoById(id: string | null, inputTodo: Todo): Observable<Todo[]> {
    TODOS.forEach((todo) => {
      if (id && todo.id === parseInt(id)) {
        (todo.author = inputTodo.author),
          (todo.title = inputTodo.title),
          (todo.content = inputTodo.content);
      }
    });
    return this.http.patch<Todo[]>(`${this.todosUrl}/${id}`, inputTodo).pipe(
      tap((todoList) => console.log(todoList)),
      catchError((error) => {
        console.log(error);
        return of();
      })
    );
  }
}
