import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideModule } from 'ng-click-outside';
import { FormsModule } from '@angular/forms';

import { PerfilComponent } from './perfil.component';

@NgModule({
  declarations:[
    PerfilComponent
  ],
  exports:[
    PerfilComponent
  ],
  imports:[
    CommonModule,
    ClickOutsideModule,
    FormsModule
  ],
  providers:[]
})
export class PerfilModule {}