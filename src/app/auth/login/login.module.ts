import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule  } from '@angular/forms';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule { }
