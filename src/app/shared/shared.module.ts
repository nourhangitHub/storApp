import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgxSpinnerModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    NgxSpinnerModule,
    HeaderComponent,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class SharedModule { }
