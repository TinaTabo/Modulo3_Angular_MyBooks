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

  modify(){
    console.log(this.profile.name);
  }
}
