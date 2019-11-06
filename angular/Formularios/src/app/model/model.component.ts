import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.maxLength(10)
      ]),
      apellidos: new FormControl('', [
        Validators.required
      ]),
      edad: new FormControl('', [
        this.edadValidator
      ]),
      email: new FormControl('', [
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      ]),
      password: new FormControl(''),
      repite_password: new FormControl(''),
      privacidad: new FormControl('')
    }, [
      this.passwordValidator
    ]);
  }

  ngOnInit() {
    const controlNombre = this.formulario.controls['nombre'];
    controlNombre.valueChanges.pipe(debounceTime(400)).subscribe((value) => {
      console.log(value);
    });
  }

  onSubmit() {
    console.log(this.formulario.value);
  }

  edadValidator(control: FormControl) {
    const edadMinima = 16;
    const edadMaxima = 65;
    if (control.value >= edadMinima && control.value <= edadMaxima) {
      return null;
    } else {
      return {
        edadvalidator: {
          min: edadMinima,
          max: edadMaxima
        }
      };
    }
  }

  passwordValidator(form: FormGroup) {
    const passwordControl = form.controls['password'];
    const repitePasswordControl = form.controls['repite_password'];

    if (passwordControl.value === repitePasswordControl.value) {
      return null;
    } else {
      return { passwordvalidator: true };
    }
  }

}


