import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ LoginFormComponent } from './components/login-form/login-form.component'

const routes: Routes = [
  {
    path:'',
    redirectTo: '/inicio',
    pathMatch: 'full' 
  },
  {
    path: 'inicio/registro',
    component: LoginFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
