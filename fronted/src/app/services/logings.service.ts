import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/loging'
import { NgForm, NgModel } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LogingsService {

  API_URI = 'http://localhost:3000/Inicio'

  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get(`${this.API_URI}`);
  }

  getUsuario(carnet: string) {
    return this.http.get(`${this.API_URI}/${carnet}`);
  }

  guardarUsuario(usuario: Usuario) {
    console.log(usuario)
    return this.http.post(`${this.API_URI}`, usuario);
  }

  updatePassword(carnet: string, updatePassword: Usuario) {
    return this.http.put(`${this.API_URI}/${carnet}`, updatePassword); 
  }

}
