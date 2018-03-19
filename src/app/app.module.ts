import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LoginModule,
    CoreModule
=======
import { LoginModule } from './login/login.module'
import { CoreModule } from './core/core.module'


@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    
    LoginModule,
    CoreModule,
>>>>>>> e2e5a04b70305eadf9aecbfe2f89cc92dc1a8ee0
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
