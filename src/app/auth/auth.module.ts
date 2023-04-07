import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login/login.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AUTH_STATE_NAME } from './state/authselector';
import { AuthReducer } from './state/authreducer';



const routes:Routes=[
  {
    path:'',component:LoginComponent
  }

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,ReactiveFormsModule,StoreModule.forFeature(AUTH_STATE_NAME,AuthReducer),FormsModule,RouterModule.forChild(routes)
  ],
})
export class AuthModule { }
