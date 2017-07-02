import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Item } from './../../../providers/item.model';
import { ItemsService } from './../../../providers/items.service';

@Component({
  selector: 'cardapio-item',
  templateUrl: './cardapio-item.component.html',
  styleUrls: ['./cardapio-item.component.scss']
})

export class CardapioItemComponent implements OnInit{
  optionChosed: number = 1;
  cardapioItem: Item = {id: 0, name: '', price: 0, section: ''};
  selectedSection: string = 'Selecione'; styleSection;
  styleModal; styleDelete; showDelete = false;

  sections = [
    {name: 'Refeições'},
    {name: 'Bebidas'},
    {name: 'Sobremesas'}
  ]

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private itemsService: ItemsService
  ){}

  @ViewChild('dropdown') dropdown: ElementRef;
  @ViewChild('input') input: ElementRef;
  @ViewChild('mainCol') mainCol: ElementRef;

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id: number = +params['id'];
      this.itemsService
          .getItem(id)
          .then((item: Item) => this.cardapioItem = item)
    });
  }

  dropSections(){
    let positionX = this.dropdown.nativeElement.offsetLeft + this.mainCol.nativeElement.offsetWidth;
    let positionY = this.dropdown.nativeElement.offsetTop + this.input.nativeElement.clientHeight/2+ 3;
    let width = this.input.nativeElement.clientWidth;
    let css = {
      'display': 'block',
      'top': positionY +'px',
      'left': positionX +'px',
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

  delete(){}
}