import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { TablesModule } from './../menu/tables/tables.module';

@NgModule({
  declarations:[
    LoginComponent
  ],
  exports:[
    LoginComponent
  ],
  imports:[
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    TablesModule,
    ReactiveFormsModule
  ],
  providers:[]
})
export class LoginModule {}