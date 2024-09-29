import { Injectable } from '@angular/core';
import { AppState } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { getDataTask } from '../../../store/actions/list-task.action';

@Injectable({
  providedIn: 'root',
})
export class ListTasksService {
  constructor(private store: Store<AppState>) {}

  getAllTask() {
    const tasks = localStorage.getItem('@tasks');

    this.store.dispatch(getDataTask({ data: tasks ? JSON.parse(tasks) : [] }));
  }
}
