// Loading component

import { Task } from '../../pages/new-task/models';

export interface InitialStateLoadinComponent {
  isLoading: boolean;
}

// Error message

export interface InitialStateErrorMessage {
  isError: boolean;
  message: string;
  good: boolean;
}

//List task

export interface InitialStateListTask {
  dataTask: Task[];
}
