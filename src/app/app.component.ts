import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cookie } from 'ng2-cookies';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  currRoute = '/';
  cookies: Object;
  keys: Array<string>;
  router; categories;

  constructor(
    private _router: Router
  ) {
    this.router = _router;
    this.update();
  }

  sections = [
     {name: 'MESAS', id: '', route: '/tables'},
     {name: 'CARDÁPIO', id: '', route: '/cardapio'},
     {name: 'PROMOÇÕES', id: '', route: '/promotions'},
     {name: 'PERFIL', id: '', route: '/perfil'}
  ]

  ngOnInit(){
    if(this.cookies['login'] === 'false'){
      this.router.navigate(['login'])
    }
    this.router.events.subscribe((url:any) => {
      this.currRoute = url.url
    });
  }

  checkUrl(route: string): boolean{
    if (route && route.trim() != '') {
      return !this.currRoute.search(route);
    }
  }

  update() {
    this.cookies = Cookie.getAll();
    this.keys = Object.keys(this.cookies);
  }

  addCookie(cName: string, cValue: any) {
    console.log('Adding: ', cName, cValue);
    Cookie.set(cName, cValue);
    this.update();
  }

  removeCookie(rName: string) {
    console.log('Removing: ', rName);
    Cookie.delete(rName);
    this.update();
  }

  setCookie(cName: string, cValue: any){
    Cookie.delete(cName);
    Cookie.set(cName, cValue);
    this.update();
  }

  logout(){
    /*this.categoriesService
      .logout()
      .then(() => {
        Cookie.deleteAll();
        this.setCookie('login', false);
      })
      .catch (error => (error));*/
  }
}
