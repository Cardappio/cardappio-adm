import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Table } from './../../../providers/table.model';
import { TablesService } from './../../../providers/tables.service';

@Component({
  selector: 'table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.scss']
})

export class TableDetailsComponent implements OnInit{
  table: Table;
  optionChosed: number = 1;
  styleModal; styleDelete; showDelete = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private tablesService: TablesService
  ){}

  ngOnInit(): void{
    this.table = new Table(0, false);
    this.route.params.forEach((params: Params) => {
      let id: number = +params['id'];
      this.tablesService.getTable(id)
        .then((table: Table) => this.table = table);
    });
  }

  modal(){
    let css = {
      'display': 'block',
      'z-index': 0,
      'opacity': 0.7
    }
    return css;
  }

  delete(){}
}
