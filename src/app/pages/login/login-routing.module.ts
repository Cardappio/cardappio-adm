import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { TablesComponent } from './../menu/tables/tables.component';

const loginRoutes: Routes = [
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'tables',        
    component: TablesComponent,
  }
];

@NgModule({
  imports:[
    RouterModule.forChild(loginRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class LoginRoutingModule {}