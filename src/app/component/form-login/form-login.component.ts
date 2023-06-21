import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { Response } from 'src/app/models/response';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  public form_login: FormGroup;
  public user:User;

  constructor(public userService: UserService, public router: Router){}

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
    }).then(()=>{
      this.router.navigateByUrl('/books');
    })
  }

  errorMsg(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Lo sentimos, no fue posible iniciar sesión con las credenciales proporcionadas. Por favor, verifica tus datos e intenta nuevamente. Si el problema persiste, no dudes en contactarnos para recibir asistencia. ¡Gracias!'
    })

    console.log("Los datos no coinciden con ningún usuario registrado");
  }

  onSubmit(){
    let email = this.form_login.get('email').value;
    let password = this.form_login.get('password').value;
    //-- Crearmos un nuevo usuario para enviar en el body de la petición.
    //-- Todos sus campos seran nulos (no tendrán valor) excepto email y password.
    //-- Compararemos estos datos con la base de datos y obtendremos los datos del usuario registrado.
    this.user = new User(null,null,null,email,null,password);

    //-- Servicio de login, comprueba si el usuario esta registrado y si es asi lo loguea.
    this.userService.loginUser(this.user).subscribe((data:Response)=>{
      if(data.error == false){
        this.userService.logueado = true;
        this.userService.user = data.result[0];
        this.successMsg();
      }else{
        this.errorMsg();
      }
    })
  }

}
