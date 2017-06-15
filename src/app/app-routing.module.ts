import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TablesComponent } from './pages/menu/tables/tables.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'tables',
    component: TablesComponent
  },
  {
    path: 'cardapio',
    component: TablesComponent
  },
  {
    path: 'promotions',
    component: TablesComponent
  },
  {
    path: 'perfil',
    component: TablesComponent
  }
];

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {}    