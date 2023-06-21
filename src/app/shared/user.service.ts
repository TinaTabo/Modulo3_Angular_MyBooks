import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string = "http://localhost:3000";
  public logueado:boolean;
  public user:User;

  constructor(private http: HttpClient) {
      this.logueado = false;
  }

  //-- Método para registrar un nuevo usuario
  registerUser(user:User):Observable<Object>{
    return this.http.post(this.url + "/register",user);
  }

  //-- Método para loguear un usuario
  loginUser(user:User):Observable<Object>{
    return this.http.post(this.url + "/login",user);
  }
}
