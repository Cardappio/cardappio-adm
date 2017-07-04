import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Table } from './../../providers/table.model';
import { TablesService } from './../../providers/tables.service';
import { AuthService } from './../../providers/auth.service';

@Component({
  selector: 'tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})

export class TablesComponent implements OnInit {
  tables: Table[];
  tablesAux: Table[];
  
  constructor(private tablesService: TablesService, private authData: AuthService){
    this.tables = [];
  }

  @ViewChild('dropdown') dropdown: ElementRef;
  @ViewChild('mainCol') mainCol: ElementRef;
  @ViewChild('imgInputRegister') imgInputRegister: ElementRef;
  @ViewChild('imgInputEdit') imgInputEdit: ElementRef;

  ngOnInit(): void {
    this.tablesService.getTables().subscribe(mesas => {
      let mesasTmp: Table[] = [];
      mesas.forEach(mesa => {
        let mesaTmp = new Table();
        mesaTmp.key = mesa.$key;
        mesaTmp.numero = mesa.numero;
        mesaTmp.status = mesa.status;
        mesasTmp.push(mesaTmp);
      });
      this.tables = mesasTmp;
    });
  }

  dropTable(ev, minus){
    let positionX = ev.clientX  -minus;
    let positionY = ev.clientY;
    let css = {
      'display': 'block',
      'top': positionY+'px',
      'left': positionX+'px'
    }
    return css;
  }

  modal(){
    let css = {
      'display': 'block',
      'z-index': 0,
      'opacity': 0.7
    }
    return css;
  }

  softDelete(id: number){
    this.tablesService.deleteTable(id)
      .then((tables: Table[]) => this.tables = this.tablesAux = tables) ;
  }
}
