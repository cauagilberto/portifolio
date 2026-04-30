export class Categoria {
    #nome;
    #valor; //estou garantindo que somente a classe pode manipular essas variáveis mas o resto do código pode us=a-los usando os gets

    constructor(nome){
        this.#nome = nome;
        this.#valor = 0;
    }

    get valor(){
        return this.#valor;
    }

    get nome(){
        return this.#nome;
    }

    //manipulação do estado
    addValor(valor){
        this.#valor += parseFloat(valor);
    }

}

export class ListaGastosCategoria {
    #categorias;
    constructor(...categorias){
        this.#categorias = categorias;
    }

    get categorias(){
        return this.#categorias;
    }


    obterCategoriaNome(nome){
        return this.#categorias.find((categoria) => categoria.nome == nome);
    }

    obterTotal() {
        return this.#categorias.reduce((total, categoria) => total + categoria.valor, 0);
    }

}