import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/loging';
import { LogingsService } from '../../services/logings.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios: any = [];
  users: Usuario = {
    carnet: 0,
    user: '',
    password: ''
  };

  constructor(private logingsService: LogingsService) { }

  ngOnInit(): void {
    this.logingsService.getUsuarios().subscribe(
      res => {
        this.usuarios = res; 
      },
      err => console.error(err)
    );
  }

  saveUser() {
    console.log(this.users);
  }

}
