import { Item } from './item.model';

export class ItemPedido {

    produto: Item;
    quantidade: number;
    observacao: string;

    constructor() {
        this.produto = new Item();
        this.quantidade = 0;
        this.observacao = '';
    }

}