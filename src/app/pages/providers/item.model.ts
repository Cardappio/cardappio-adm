export class Item {

  key: string;
  nome: string;
  preco: number;
  categoria: string;
  imagemUrl: string;
  descricao: string;
  status: string;

  constructor() {
      this.nome = "";
      this.preco = 0.00;
      this.categoria = "";
      this.imagemUrl = "";
      this.descricao = "";
      this.status = "";
  }

}