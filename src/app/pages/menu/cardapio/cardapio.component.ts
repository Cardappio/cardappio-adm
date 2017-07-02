import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Item } from './../../providers/item.model';
import { ItemsService } from './../../providers/items.service';

@Component({
  selector: 'cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})

export class CardapioComponent implements OnInit {
  cardapio; cardapioAux; styleCardapio; showCardapio = false;

  sections = [
    {name: 'Seções'},
    {name: 'Refeições'},
    {name: 'Bebidas'},
    {name: 'Sobremesas'}
  ]
  selectedSection = this.sections[0].name;
  
  constructor(private itemsService: ItemsService){}

  @ViewChild('dropdown') dropdown: ElementRef;
  @ViewChild('mainCol') mainCol: ElementRef;
  @ViewChild('imgInputRegister') imgInputRegister: ElementRef;
  @ViewChild('imgInputEdit') imgInputEdit: ElementRef;

  ngOnInit(): void {
    this.itemsService
        .getItems()
        .then((items) => this.cardapioAux = this.cardapio = items)
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

  getItems(ev: any){
    let val = ev.target.value;
    
    if (ev.target.value==''){
      return this.cardapioAux = this.cardapio;
    }
    if (val && val.trim() != '') {
      this.cardapioAux = this.cardapioAux.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  getSection(section){
    this.selectedSection = section;
    this.cardapioAux = this.cardapio;

    if (this.selectedSection=='Seções'){
      return this.cardapioAux;
    }
    if (this.selectedSection && this.selectedSection.trim() != '') {
      this.cardapioAux = this.cardapioAux.filter((item) => {
        return (item.section.toLowerCase().indexOf(this.selectedSection.toLowerCase()) > -1);
      })
    }
  }

  softDelete(id: number){}
}
