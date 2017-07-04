import { ItemPedido } from './itempedido.model';

export class Pedido {

    key: string; // Key do pedido
    cliente; // Nome do cliente
    estabKey: string; // Key do estabelecimento
    mesaKey: string; // Key da mesa
    itens: Array<ItemPedido>;
    status: string;

    constructor(){
        this.key = '';
        this.cliente = '';
        this.estabKey = '';
        this.mesaKey = '';
        this.itens = new Array();
        this.status = '';
    }
}