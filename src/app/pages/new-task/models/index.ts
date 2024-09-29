export interface FormTask {
  taskName: string;
  taskDate: string;
  people: Person[];
}

export interface Person {
  name: string;
  age: number;
  skills: Skill[];
}

export interface Skill {
  skill: string;
}

export interface Task extends FormTask {
  id: string;
}
