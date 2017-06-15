import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TablesComponent } from './tables.component';
import { TableDetailsComponent } from './table-details/table-details.component';

const tablesRoutes: Routes = [
  {
    path:'tables',
    component: TablesComponent
  },
  {
    path:'tables/:id',
    component: TableDetailsComponent
  } 
]

@NgModule({
  imports:[
    RouterModule.forChild(tablesRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class TablesRoutingModule {}