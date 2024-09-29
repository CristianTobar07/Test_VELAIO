import { Component, OnDestroy, OnInit } from '@angular/core';
import { ListTasksService } from './service/list-tasks.service';
import { IonicModule } from '@ionic/angular';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { Task } from '../new-task/models';
import { selectListTask } from '../../store/selectors';
import { Subscription } from 'rxjs';
import { setChangeSection } from '../../store/actions/list-task.action';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css'],
  standalone: true,
  imports: [IonicModule, NgClass, NgIf, NgFor],
})
export class ListTaskComponent implements OnInit, OnDestroy {
  sectionSelected: number = 1;
  dataTask: Task[] = [];

  suscription: Subscription[] = [];

  constructor(
    private TaskService: ListTasksService,
    private store: Store<AppState>
  ) {
    this.TaskService.getAllTask();
  }

  ngOnInit() {
    const suscription = this.store.select(selectListTask).subscribe((data) => {
      this.sectionSelected = data.sectionSelected;
      this.dataTask = data.dataTask;
    });

    this.suscription.push(suscription);
  }

  changeSection(section: number) {
    this.store.dispatch(setChangeSection({ id: section }));
  }

  ngOnDestroy(): void {
    this.suscription.forEach((suscription) => suscription.unsubscribe());
  }
}
