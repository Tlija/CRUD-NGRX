import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from '../counter.component';
import { CounterOutputComponent } from '../../counter-output/counter-output.component';
import { CounterButtonsComponent } from '../../counter-buttons/counter-buttons.component';
import { CustomCounterInputComponent } from '../../custom-counter-input/custom-counter-input.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { CounterReducer } from '../../state/counter.reducer';



const routes:Routes=[{
  path:'',
  component:CounterComponent,
}];




@NgModule({
  declarations: [
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CustomCounterInputComponent,
  ],
  imports: [
    FormsModule,CommonModule,RouterModule.forChild(routes),StoreModule.forFeature('counter',CounterReducer)
  ]
})
export class CounterModule { }
