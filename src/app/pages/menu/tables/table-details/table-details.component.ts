import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Table } from './../../../providers/table.model';
import { Pedido } from './../../../providers/pedido.model';
import { ItemPedido } from './../../../providers/itempedido.model';
import { Item } from './../../../providers/item.model';
import { TablesService } from './../../../providers/tables.service';

@Component({
  selector: 'table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.scss']
})

export class TableDetailsComponent implements OnInit{
  table: Table;
  pedidos: Pedido[];
  optionChosed: number = 1;
  styleModal; styleDelete; showDelete = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private tablesService: TablesService
  ){}

  ngOnInit(): void{
    this.table = new Table();
    this.route.params.forEach((params: Params) => {
      let id: string = params['id'];
      this.tablesService.getTable(id).subscribe((table: Table) => {
        this.table = table;
        this.tablesService.getPedidos(id).subscribe(pedidos => { // Pega todos pedidos daquela mesa
          let peds: Pedido[] = [];
          pedidos.forEach(pedido => { // Para cada pedido...
            let ped = new Pedido();
            let itensPedido: ItemPedido[] = [];
            this.tablesService.getItensPedido(id, pedido.$key).subscribe(_itens => { // Pega os itens desse pedido
              let itemPedido = new ItemPedido();
              _itens.forEach(_item => { // Para cada item...
                let item = new Item();
                item.key = _item.$key;
                this.tablesService.getItem(_item.$key).subscribe(i => { // Pega detalhes do item (produto)
                  item.nome = i.nome;
                  item.preco = i.preco;
                  item.descricao = i.descricao;
                  item.status = i.status;
                  item.imagemUrl = i.imagemUrl;
                  itemPedido.produto = item;
                });
                itemPedido.quantidade = _itens.quantidade;
                itemPedido.observacao = _itens.observacao;
                itensPedido.push(itemPedido);
              });
              ped.itens = itensPedido;
              ped.key = pedido.$key;
              ped.cliente = pedido.cliente;
              ped.status = pedido.status;
              peds.push(ped);
              this.pedidos = peds;
            });
          });
        });
        console.log(this.pedidos);
      });
    });
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
