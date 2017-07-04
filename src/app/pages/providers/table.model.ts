export class Table {
  key: string;
  numero: string;
  status: string; // ocupada, livre, aguardando
  
  constructor() {
    this.numero = ""; this.status = ""; this.key = "";
  }

}