import { Routes } from '@angular/router';
import { ListTaskComponent } from './pages/list-task/list-task.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';

export const routes: Routes = [
  {
    path: 'listado-tareas',
    component: ListTaskComponent,
  },
  {
    path: 'crear-tarea',
    component: NewTaskComponent,
  },
  { path: '**', redirectTo: 'listado-tareas' },
];
