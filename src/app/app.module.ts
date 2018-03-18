import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
