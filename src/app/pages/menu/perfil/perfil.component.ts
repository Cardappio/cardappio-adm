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

  modal(){
    let css = {
      'display': 'block',
      'z-index': 0,
      'opacity': 0.7
    }
    return css;
  }

  softDelete(id: number){}
}
