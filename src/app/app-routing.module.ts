import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TablesComponent } from './pages/menu/tables/tables.component';
import { CardapioComponent } from './pages/menu/cardapio/cardapio.component';

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
    component: CardapioComponent
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