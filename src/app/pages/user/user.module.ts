import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UserHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
