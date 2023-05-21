import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  public form_register: FormGroup;

  ngOnInit(){
    let minLength:number = 8;
    this.form_register = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'lastname': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(minLength)]),
      'repeatPassword': new FormControl(null, [Validators.required, Validators.minLength(minLength)])
    })
  }

  successMsg(){
    Swal.fire({
      icon: 'success',
      title: '¡Felicidades!',
      text: 'Tu registro ha sido exitoso. Ahora eres parte de nuestra comunidad. Inicia sesión con tu nueva cuenta y comienza a explorar todas las funcionalidades que ofrecemos. ¡Gracias por unirte a nosotros!'
    })
  }

  errorMsg(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Las contraseñas no coinciden. Vuelve a intentarlo.'
    })
  }

  onSubmit(){
    let name = this.form_register.get('name').value;
    let lastname = this.form_register.get('lastname').value;
    let email = this.form_register.get('email').value;
    let password = this.form_register.get('password').value;
    let repeatPassword = this.form_register.get('repeatPassword').value;

    console.log(`Nombre: ${name}, Apellidos: ${lastname}`);
    console.log(`Correo: ${email}`);
    console.log(`Contraseña: ${password}, Verificación: ${repeatPassword}`);
    
    if(password === repeatPassword){
      this.successMsg();
    }else{
      this.errorMsg();
    }
  }
}
