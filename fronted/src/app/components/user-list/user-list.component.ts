import { Component, OnInit } from '@angular/core';
import { LogingsService } from '../../services/logings.service';
import { Usuario } from 'src/app/models/loging';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any = [];
  user: Usuario = {
    carnet: 0,
    user: '',
    password: '',
    mail: ''
  };
  constructor(private logingsService: LogingsService) { }

  ngOnInit(): void {
    this.logingsService.getUsuarios().subscribe(
      res => console.log(res),
      err => console.log(err) 
    );
  }

}
