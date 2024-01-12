import { Injectable } from '@angular/core';
import { TODOS } from './src/app/mock-todo';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = TODOS;
    return { todos };
  }
}
