import { Routes } from '@angular/router';
import { ListTaskComponent } from './pages/list-task/list-task.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

export const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: 'listado-tareas',
        component: ListTaskComponent,
      },
      {
        path: 'crear-tarea',
        component: NewTaskComponent,
      },
      { path: '**', redirectTo: 'listado-tareas' },
    ],
  },
  { path: '**', redirectTo: '' },
];
