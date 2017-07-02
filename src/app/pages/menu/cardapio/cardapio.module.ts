import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideModule } from 'ng-click-outside';
import { FormsModule } from '@angular/forms';

import { CardapioComponent } from './cardapio.component';
import { CardapioItemComponent } from './cardapio-item/cardapio-item.component';
import { CardapioRoutingModule } from './cardapio-routing.module';
import { ItemsService } from './../../providers/items.service';

@NgModule({
  declarations:[
    CardapioComponent,
    CardapioItemComponent
  ],
  exports:[
    CardapioComponent,
    CardapioItemComponent
  ],
  imports:[
    CommonModule,
    ClickOutsideModule,
    CardapioRoutingModule,
    FormsModule
  ],
  providers:[
    ItemsService
  ]
})
export class CardapioModule {}