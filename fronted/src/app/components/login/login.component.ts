import { Component, OnInit } from '@angular/core';
import { LogingsService } from '../../services/logings.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private logingsService: LogingsService) { }

  ngOnInit(): void {
    this.logingsService.getUsuarios().subscribe(
      res => console.log(res),
      err => console.log(err) 
    );
  }
}