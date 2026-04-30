
//modularização
import { valorNegativo, atualizarInterface } from "./utils.js";
import { Categoria, ListaGastosCategoria } from "./classes.js";

const gastosPorCategoria = new ListaGastosCategoria(
    new Categoria("Alimentação"),
    new Categoria("Transporte"),
    new Categoria("Moradia"),
    new Categoria("Lazer")
);

//funcoes utilitarias
//const somaValores = (total, valor) => total + valor;
//manipulação do DOM
const formulario = document.querySelector('form');

formulario.addEventListener('submit', (event) => {
    //prevenir o comportamento padrão do formulário
    event.preventDefault();

    const valorInformado = formulario.elements.valor.value;
    //2. pegar a categoria informada
    const categoriaInformada = formulario.elements.categoria.value;
    
    //3. impedir numeros negativos
    if (valorNegativo(valorInformado)) {
        alert('Valor não pode ser negativo');
        return;
    }

    const categoria = gastosPorCategoria.obterCategoriaNome(categoriaInformada);
    categoria.addValor(valorInformado);

    atualizarInterface(gastosPorCategoria);
    formulario.reset();
})

