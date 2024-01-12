import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TaskComponent } from './task/task.component';
import { editComponent } from './todo/edit.component';

export const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'task/:id', component: TaskComponent },
  { path: 'edit/:id', component: editComponent },
];
