import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    static idDeContas = 0;
    
    agencia;
    
    _cliente;
    _saldo = 0;

    set cliente(novoValor) {                     //Assessores
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {                          // Assessores sempre são publicos
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
        ContaCorrente.idDeContas += 1;
    }
  /*   saldoAtual(valor){
        if(this._saldo == valor){
            return valor
        }
    } */

    sacar(valor) {                                    // Operação  um METODO ~ Se saldo dessa conta for maior ou igual (valor)
        if (this._saldo >= valor) {                   // this._saldo ~ saldo dessa conta que chama o metodo sacar for menor ou igual
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }

}