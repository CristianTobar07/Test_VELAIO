import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
  standalone: true,
  imports: [IonicModule],
})
export class NewTaskComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
