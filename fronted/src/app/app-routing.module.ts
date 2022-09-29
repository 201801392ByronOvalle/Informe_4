import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ LoginComponent } from './components/login/login.component';
import{ LoginFormComponent } from './components/login-form/login-form.component';
import{UserListComponent} from './components/user-list/user-list.component';
import{RestablecerComponent} from './components/restablecer/restablecer.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/inicio',
    pathMatch: 'full' 
  },
  {
    path: 'inicio',
    component: LoginComponent
  },
  {
    path: 'inicio/registro',
    component: LoginFormComponent
  },
  {
    path: 'inicio/portal',
    component: UserListComponent
  },
  {
    path: 'inicio/restablecer',
    component: RestablecerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
