import { Component, OnInit } from '@angular/core';
import { ListTasksService } from './service/list-tasks.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css'],
  standalone: true,
})
export class ListTaskComponent implements OnInit {
  constructor(private TaskService: ListTasksService) {}

  ngOnInit() {
    this.TaskService.getAllTask();
  }
}
