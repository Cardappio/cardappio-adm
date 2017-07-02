import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Item } from './../../providers/item.model';
import { ItemsService } from './../../providers/items.service';

@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  perfil; perfilAux; stylePerfil; showPerfil = false;

  option = [
    {id: 0, status: false, name: 'Domingo'},
    {id: 1, status: true, name: 'Segunda'},
    {id: 2, status: false, name: 'Terça'},
    {id: 3, status: false, name: 'Quarta'},
    {id: 4, status: false, name: 'Quinta'},
    {id: 5, status: false, name: 'Sexta'},
    {id: 6, status: false, name: 'Sábado'}
  ]
  
  constructor(private itemsService: ItemsService){}

  @ViewChild('dropdown') dropdown: ElementRef;
  @ViewChild('mainCol') mainCol: ElementRef;
  @ViewChild('imgInputRegister') imgInputRegister: ElementRef;
  @ViewChild('imgInputEdit') imgInputEdit: ElementRef;

  ngOnInit(): void {
    this.itemsService
        .getItems()
        .then((items) => this.perfilAux = this.perfil = items)
  }

  dropSection(){
    let positionX = this.dropdown.nativeElement.offsetLeft + this.mainCol.nativeElement.offsetWidth;
    let positionY = this.dropdown.nativeElement.offsetTop + this.dropdown.nativeElement.clientHeight/2+ 3;
    let width = this.dropdown.nativeElement.clientWidth;
    let css = {
      'display': 'block',
      'top': positionY+'px',
      'left': positionX+'px',
      'width': width+'px'
    }
    return css;
  }
}
