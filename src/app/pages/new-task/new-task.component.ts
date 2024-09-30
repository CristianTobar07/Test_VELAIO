import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
import { ToastrService } from 'ngx-toastr';
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

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.taskForm = this.fb.group({
      taskName: ['', Validators.required],
      taskDate: ['', Validators.required], // Campo para el nombre de la tarea
      people: this.fb.array([this.createPersonForm()]), // Inicia con al menos una persona
    });
  }

  // Obtener el FormArray de personas
  get people(): FormArray {
    return this.taskForm.get('people') as FormArray;
  }

  // Crear un nuevo FormGroup para una persona
  createPersonForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required], // Nombre de la persona
      age: ['', [Validators.required, Validators.min(18)]], // Edad de la persona
      skills: this.fb.array([this.createSkillForm()]), // Inicia con al menos una habilidad
    });
  }

  // Obtener el FormArray de habilidades para una persona específica
  getSkills(personIndex: number): FormArray {
    return this.people.at(personIndex).get('skills') as FormArray;
  }

  // Crear un nuevo FormGroup para una habilidad
  createSkillForm(): FormGroup {
    return this.fb.group({
      skill: ['', Validators.required], // Campo de habilidad
    });
  }

  // Agregar una nueva persona al FormArray de personas
  addPerson() {
    // Verificar si la última persona añadida es válida antes de permitir agregar otra
    const lastPersonIndex = this.people.length - 1;
    const lastPersonForm = this.people.at(lastPersonIndex) as FormGroup;

    if (lastPersonForm.valid) {
      this.people.push(this.createPersonForm());
    } else {
      // Si la persona actual no está validada, muestra un mensaje o no permite añadir
      lastPersonForm.markAllAsTouched(); // Esto marca todos los campos como tocados para mostrar errores
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
      lastSkillForm.markAllAsTouched(); // Muestra errores en la habilidad actual
    }
  }

  // Eliminar una persona del FormArray de personas
  removePerson(personIndex: number) {
    if (this.people.length > 1) {
      this.people.removeAt(personIndex);
    }
  }

  // Eliminar una habilidad del FormArray de habilidades
  removeSkill(personIndex: number, skillIndex: number) {
    const skills = this.getSkills(personIndex);
    if (skills.length > 1) {
      skills.removeAt(skillIndex);
    }
  }

  // Método para enviar el formulario
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
