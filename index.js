import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente("Victor", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrenteVictor = new ContaCorrente(1001, cliente1);

contaCorrenteVictor.depositar(500);
contaCorrenteVictor.sacar(100);

const conta2 = new ContaCorrente(102, cliente2);



let _saldo = 150;
//contaCorrenteVictor.transferir(valor, conta2);


console.log(ContaCorrente.idDeContas);