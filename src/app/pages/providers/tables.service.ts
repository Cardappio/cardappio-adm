import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Table } from './table.model';
import { AuthService } from './auth.service';

@Injectable()
export class TablesService {

  TABLES: Table[] = [];

  constructor(private authService: AuthService, private db: AngularFireDatabase) {

  }

  getTables() {
    return Observable.create(_mesas => {
      this.authService.getCurrentUser().subscribe(user => {
        this.db.object('/gerentes_estabelecimentos/'+user.uid).subscribe(gerente => {
          this.db.list('mesas/'+gerente.estabelecimento).subscribe(mesas => {
            _mesas.next(mesas);
          });
        });
      });
    });
  }

  getTable(id: string) {
    return Observable.create(_mesa => {
      this.authService.getCurrentUser().subscribe(user => {
        this.db.object('/gerentes_estabelecimentos/'+user.uid).subscribe(gerente => {
          this.db.object('mesas/'+gerente.estabelecimento+'/'+id).subscribe(mesa => {
            _mesa.next(mesa);
          });
        });
      });
    });
  }

  getPedidos(mesaKey: string) {
    return Observable.create(_pedidos => {
      this.authService.getCurrentUser().subscribe(user => {
        this.db.object('/gerentes_estabelecimentos/'+user.uid).subscribe(gerente => {
          this.db.list('pedidos/'+gerente.estabelecimento+'/'+mesaKey).subscribe(pedido => {
            _pedidos.next(pedido);
          });
        });
      });
    });
  }

  getItensPedido(mesaKey: string, pedidoKey: string) {
    return Observable.create(_itensPedido => {
      this.authService.getCurrentUser().subscribe(user => {
        this.db.object('/gerentes_estabelecimentos/'+user.uid).subscribe(gerente => {
          this.db.list('pedidos/'+gerente.estabelecimento+'/'+mesaKey+'/'+pedidoKey+'/itens').subscribe(itens => {
            _itensPedido.next(itens);
          });
        });
      });
    });
  }

  getItem(itemKey: string) {
    return Observable.create(_itemCardapio => {
      this.authService.getCurrentUser().subscribe(user => {
        this.db.object('/gerentes_estabelecimentos/'+user.uid).subscribe(gerente => {
          this.db.list('cardapios/'+gerente.estabelecimento).subscribe(cardapios => {
            cardapios.forEach(cardapio => {
              this.db.object('cardapios/'+gerente.estabelecimento+'/'+cardapio.$key+'/'+itemKey).subscribe(itemCardapio => {
                if(itemCardapio.nome != undefined)
                  _itemCardapio.next(itemCardapio);
              });
            });
          });
        });
      });
    });
  }
  
  deleteTable(id: number): Promise<Table[]> {
    // this.TABLES = this.TABLES.filter(table => table.id !== id)
    return Promise.resolve(this.TABLES);
  }

  submitTable(newTable: Table): Promise<Table[]> {
    this.TABLES.push(newTable);
    return Promise.resolve(this.TABLES);
  }
}