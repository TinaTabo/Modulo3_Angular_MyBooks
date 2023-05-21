import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  public form_login: FormGroup;

  ngOnInit(){
    let minLength:number = 8;
    this.form_login = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(minLength)])
    })
  }

  successMsg(){
    Swal.fire({
      icon: 'success',
      title: '¡Bienvenido/a!',
      text: 'Has iniciado sesión correctamente. Disfruta de todas las funciones y características de nuestra aplicación. ¡Gracias por ser parte de nuestra comunidad!'
    })
  }

  errorMsg(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Lo sentimos, no fue posible iniciar sesión con las credenciales proporcionadas. Por favor, verifica tus datos e intenta nuevamente. Si el problema persiste, no dudes en contactarnos para recibir asistencia. ¡Gracias!'
    })
  }

  onSubmit(){
    let email = this.form_login.get('email').value;
    let password = this.form_login.get('password').value;
    console.log(`Correo: ${email}, Contraseña: ${password}`);
    //-- Como por el momento no tenemos una base de datos con la que comprobar los usuarios
    //-- registrados, al realizar el login se mostrará el msg de que se ha logueado correctamente.
    this.successMsg();
  }

}
