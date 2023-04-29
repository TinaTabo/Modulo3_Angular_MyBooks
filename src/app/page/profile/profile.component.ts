import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public profile: User;

  constructor(){
    this.profile = new User(1234,'Cristina','Taboada Mayo','cris.taboada98@gmail.com','../../../assets/img/foto-perfil.jpg','56789');
  }

  modify(name:string,last_name:string,email:string,photo:string){
    console.log(this.profile);
    if (name != '') {
      this.profile.name = name;
    }
    if (last_name != '') {
      this.profile.last_name = last_name;
    }
    if (email != '') {
      this.profile.email = email;
    }
    if (photo != '') {
      this.profile.photo = photo;
    }
    console.log(this.profile);
  }
}
