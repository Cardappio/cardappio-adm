import { Component, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  option = '1';
  router; categories;

  constructor(private _router: Router) {
    this.router = _router;
  }

  sections = [
     {name: 'MESAS', option: '1', id: '', route: '/tables'},
     {name: 'CARDÁPIO', option: '2', id: '', route: '/cardapio'},
     {name: 'PROMOÇÕES', option: '3', id: '', route: '/promotions'},
     {name: 'PERFIL', option: '4', id: '', route: '/perfil'}
  ]

}
