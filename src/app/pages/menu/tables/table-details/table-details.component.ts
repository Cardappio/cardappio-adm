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
}
