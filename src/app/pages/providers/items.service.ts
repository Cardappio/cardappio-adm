import { Injectable } from '@angular/core';

import { Item } from './item.model';

@Injectable()
export class ItemsService {

  ITEMS: Item [] = [
    {id: 1, name: 'Carne', price: 5.50, section: 'Refeições'},
    {id: 2, name: 'Água', price: 9.99, section: 'Bebidas'},
    {id: 3, name: 'Cerveja', price: 9.99, section: 'Bebidas'},
    {id: 4, name: 'Carne', price: 9.99, section: 'Refeições'},
    {id: 5, name: 'Cerveja', price: 9.99, section: 'Bebidas'},
    {id: 6, name: 'Água', price: 5.50, section: 'Bebidas'},
    {id: 7, name: 'Carne', price: 9.99, section: 'Refeições'},
    {id: 8, name: 'Cerveja', price: 9.99, section: 'Bebidas'},
    {id: 9, name: 'Água', price: 9.99, section: 'Bebidas'},
    {id: 10, name: 'Carne', price: 9.99, section: 'Refeições'},
    {id: 11, name: 'Cerveja', price: 5.50, section: 'Bebidas'},
    {id: 12, name: 'Carne', price: 9.99, section: 'Refeições'},
    {id: 13, name: 'Cerveja', price: 9.99, section: 'Bebidas'},
    {id: 14, name: 'Carne', price: 9.99, section: 'Refeições'}
  ];

  getItems(): Promise<Item[]> {
    return Promise.resolve(this.ITEMS);
  }

  getItem(id: number): Promise<Item> {
    return this.getItems()
      .then((items: Item[]) => items
        .find(item => item.id === id));
  }
  
  deleteItem(id: number): Promise<Item[]> {
    this.ITEMS = this.ITEMS.filter(item => item.id !== id)
    return Promise.resolve(this.ITEMS);
  }

  submitItem(newItem: Item): Promise<Item[]> {
    this.ITEMS.push(newItem);
    return Promise.resolve(this.ITEMS);
  }
}