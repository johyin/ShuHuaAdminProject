import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { Routes, RouterModule } from '@angular/router';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
]


=======
import { LoginComponent } from './login/login.component';



import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
]
>>>>>>> e2e5a04b70305eadf9aecbfe2f89cc92dc1a8ee0
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgZorroAntdModule.forRoot(),
  ],
<<<<<<< HEAD
  exports: [RouterModule],
  declarations: [RegisterComponent, LoginComponent]
=======
  declarations: [LoginComponent],
  exports: [RouterModule]
>>>>>>> e2e5a04b70305eadf9aecbfe2f89cc92dc1a8ee0
})
export class LoginModule { }
