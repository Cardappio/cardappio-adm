import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CardapioComponent } from './pages/menu/cardapio/cardapio.component';
import { PerfilComponent } from './pages/menu/perfil/perfil.component';
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
    component: CardapioComponent
  },
  {
    path: 'promotion',
    component: TablesComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
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