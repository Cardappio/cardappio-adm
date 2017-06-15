import { Injectable } from '@angular/core';

import { Table } from './table.model';

@Injectable()
export class TablesService {

  TABLES: Table [] = [
    {id:  0, state: true},
    {id:  1, state: false},
    {id:  2, state: false},
    {id:  3, state: false},
    {id:  4, state: false},
    {id:  5, state: true},
    {id:  6, state: false},
    {id:  7, state: false},
    {id:  8, state: false},
    {id:  9, state: false},
    {id:  10, state: true},
    {id:  11, state: false},
    {id:  12, state: false},
    {id:  13, state: false}
  ];

  getTables(): Promise<Table[]> {
    return Promise.resolve(this.TABLES);
  }

  getTable(id: number): Promise<Table> {
    return this.getTables()
      .then((tables: Table[]) => tables
        .find(table => table.id === id));
  }
  
  deleteTable(id: number): Promise<Table[]> {
    this.TABLES = this.TABLES.filter(table => table.id !== id)
    return Promise.resolve(this.TABLES);
  }

  submitTable(newTable: Table): Promise<Table[]> {
    this.TABLES.push(newTable);
    return Promise.resolve(this.TABLES);
  }
}