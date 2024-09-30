import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { setDataTask } from '../../store/actions/list-task.action';
import { Router } from '@angular/router';
import { setIsErrorMessage } from '../../store/actions/error-message.actions';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, NgFor, NgClass],
})
export class NewTaskComponent {
  taskForm: FormGroup;
  dateRef = new Date();
  currectDate: string = '';

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.taskForm = this.fb.group({
      taskName: ['', Validators.required],
      taskDate: ['', Validators.required],
      people: this.fb.array([this.createPersonForm()]),
    });

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Añade el cero inicial si es necesario
    const day = ('0' + currentDate.getDate()).slice(-2); // Añade el cero inicial si es necesario

    // Formato 'yyyy-MM-dd'
    this.currectDate = `${year}-${month}-${day}`;
  }

  get people(): FormArray {
    return this.taskForm.get('people') as FormArray;
  }

  createPersonForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      skills: this.fb.array([this.createSkillForm()]),
    });
  }

  getSkills(personIndex: number): FormArray {
    return this.people.at(personIndex).get('skills') as FormArray;
  }

  createSkillForm(): FormGroup {
    return this.fb.group({
      skill: ['', Validators.required],
    });
  }

  addPerson() {
    const lastPersonIndex = this.people.length - 1;
    const lastPersonForm = this.people.at(lastPersonIndex) as FormGroup;

    if (lastPersonForm.valid) {
      this.people.push(this.createPersonForm());
    } else {
      lastPersonForm.markAllAsTouched();
    }
  }

  // Agregar una nueva habilidad al FormArray de habilidades
  addSkill(personIndex: number) {
    const skills = this.getSkills(personIndex);
    const lastSkillIndex = skills.length - 1;
    const lastSkillForm = skills.at(lastSkillIndex) as FormGroup;

    if (lastSkillForm.valid) {
      skills.push(this.createSkillForm());
    } else {
      lastSkillForm.markAllAsTouched();
    }
  }

  removePerson(personIndex: number) {
    if (this.people.length > 1) {
      this.people.removeAt(personIndex);
    }
  }

  removeSkill(personIndex: number, skillIndex: number) {
    const skills = this.getSkills(personIndex);
    if (skills.length > 1) {
      skills.removeAt(skillIndex);
    }
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.store.dispatch(setDataTask({ data: this.taskForm.value }));

      this.router.navigate(['/listado-tareas']);

      this.store.dispatch(
        setIsErrorMessage({
          message: '¡Tarea registrada exitosamente!',
          good: true,
        })
      );
    }
  }
}
