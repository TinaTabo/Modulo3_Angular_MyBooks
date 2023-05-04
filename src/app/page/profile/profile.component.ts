import { style } from '@angular/animations';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user';
import { __values } from 'tslib';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @ViewChild('msgActu') changes: ElementRef;
  @ViewChild('msgNoActu') noChanges: ElementRef;

  public profile: User;

  constructor(private renderer2: Renderer2){
    this.profile = new User(1234,'Cristina','Taboada Mayo','cris.taboada98@gmail.com','../../../assets/img/foto-perfil.jpg','56789');
  }

  modify(name:string,last_name:string,email:string,photo:string){
    const msgActu = this.changes.nativeElement;
    const msgNoActu = this.noChanges.nativeElement;
    let modify:boolean = false;

    if (name != '') {
      this.profile.name = name;
      modify = true;
    }
    if (last_name != '') {
      this.profile.last_name = last_name;
      modify = true;
    }
    if (email != '') {
      this.profile.email = email;
      modify = true;
    }
    if (photo != '') {
      this.profile.photo = photo;
      modify = true;
    }

    if (modify == true) {
      this.renderer2.setStyle(msgNoActu, 'display', 'none');
      this.renderer2.setStyle(msgActu, 'display', 'block');
      modify = false;
    }else{
      this.renderer2.setStyle(msgActu, 'display', 'none');
      this.renderer2.setStyle(msgNoActu, 'display', 'block');
    }

    setTimeout(()=>{
      this.renderer2.setStyle(msgNoActu, 'display', 'none');
      this.renderer2.setStyle(msgActu, 'display', 'none');
    }, 3000);
  }
}
