import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardapioComponent } from './cardapio.component';
import { CardapioItemComponent } from './cardapio-item/cardapio-item.component';

const cardapioRoutes: Routes = [
  {
    path:'cardapio',
    component: CardapioComponent
  },
  {
    path:'cardapio/:id',
    component: CardapioItemComponent
  } 
]

@NgModule({
  imports:[
    RouterModule.forChild(cardapioRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class CardapioRoutingModule {}