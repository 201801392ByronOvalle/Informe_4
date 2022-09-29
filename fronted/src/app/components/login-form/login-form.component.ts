import { Component, OnInit } from '@angular/core';
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

  saveNewUser() {
    this.logingsService.guardarUsuario(this.users).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    )
  }

}