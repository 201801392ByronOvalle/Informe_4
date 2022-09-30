import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/loging';
import { LogingsService } from '../../services/logings.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  usuarios: any = [];
  users: Usuario = {
    carnet: 0,
    user: '',
    password: '',
    mail: ''
  };

  constructor(private logingsService: LogingsService) { }

  ngOnInit(): void {
    this.logingsService.getUsuarios().subscribe(
      res => {
        this.usuarios = res; 
      }
    );
  }

  saveNewUser(data: NgForm) {
    console.log(data.value)
    this.users.carnet = data.value.carnet
    this.users.user = data.value.user
    this.users.mail = data.value.mail
    this.users.password = data.value.password

    this.logingsService.guardarUsuario(this.users).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    )
  }

}