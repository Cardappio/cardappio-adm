import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideModule } from 'ng-click-outside';
import { FormsModule } from '@angular/forms';

import { TablesComponent } from './tables.component';
import { TableDetailsComponent } from './table-details/table-details.component';
import { TablesRoutingModule } from './tables-routing.module';
import { TablesService } from './../../providers/tables.service';

@NgModule({
  declarations:[
    TablesComponent,
    TableDetailsComponent
  ],
  exports:[
    TablesComponent,
    TableDetailsComponent
  ],
  imports:[
    CommonModule,
    ClickOutsideModule,
    FormsModule,
    TablesRoutingModule
  ],
  providers:[
    TablesService
  ]
})
export class TablesModule {}