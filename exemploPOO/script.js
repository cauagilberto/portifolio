class ContaBancaria {
    #saldo;
    constructor(){
        this.#saldo = 0;
    }

    depositar(valor){
        this.#saldo += valor;
    }

    sacar(valor){
        this.#saldo -= valor;
    }

    temSaldoSaque(valor){
        return valor <= this.#saldo;
    }

    getSaldo(){
        return this.#saldo;
    }
}

class CaixaEletronico {
    constructor(){
        this.conta = conta;
    }

    depositar(){
        //pegar valor do input
        const valorDeposito = parseFloat(document.getElementById("valorDeposito").value);
        //fazer depósito na conta
        this.conta.depositar(valorDeposito);
        //exibir saldo atualizado
        this.mostrarSaldo(this.conta.getSaldo());
    }

    mostrarSaldo(saldo){
        document.getElementById("saldo").textContent = `Saldo: R$ ${saldo}`;
        document.getElementById("valorDeposito").value = "";
        document.getElementById("valorSaque").value = "";
    }

    sacar(valor){
        //pegar valor do input
        const valorSaque = parseFloat(document.getElementById("valorSaque").value);
        //fazer saque na conta
        if(this.conta.temSaldoSaque(valorSaque)){
            this.conta.sacar(valorSaque);
        } else {
            alert("Saldo insuficiente para saque!");
        }
        //mostrar saldo atualizado
        this.mostrarSaldo(this.conta.getSaldo());
    }

}

//instancias
const conta = new ContaBancaria();
const caixaEletronico = new CaixaEletronico(conta);
