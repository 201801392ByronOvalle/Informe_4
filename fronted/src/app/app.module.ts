import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LoginComponent } from './components/login/login.component';
import { RestablecerComponent } from './components/restablecer/restablecer.component';

import { LogingsService } from './services/logings.service'
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginFormComponent,
    UserListComponent,
    LoginComponent,
    RestablecerComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LogingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
