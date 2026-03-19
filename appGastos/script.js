

const matrizGastos = [
    ["Alimentação", 0],
    ["Transporte", 0],
    ["Moradia", 0],
    ["Lazer", 0],
    ["Total", 0]
]

//funcoes utilitarias
const obterElemento = (id) => document.getElementById(id);
const valorNegativo = (valor) => valor < 0;
const somaValores = (total, valor) => total + valor;
const limparCampos = () => obterElemento('valor').value = '';
const formataMoeda = (valor) => valor.toFixed(2).replace('.', ',');

//funcoes para valores do form
const obterValor = () => parseFloat(obterElemento('valor').value);
const obterCategoriaInformada= () => obterElemento('categoria').value;

//funcoes para valores da matriz
const obterCategoria = (matriz, nomeCategoria, ) => matriz.find((item) => item[0] == nomeCategoria);

//atualizar valor na matriz
const atualizarValorCategoria = (categoria, valor) => categoria[1] = somaValores(categoria[1], valor);

const atualizarInterface = () => {
    matrizGastos.forEach(([nome, valor]) => {
        // Atualizar a interface com o novo valor
        const elemento = obterElemento(nome);
        elemento.textContent = `${nome}: R$ ${formataMoeda(valor)}`;
    })
}


function adicionarGasto() {
    const valorInformado = obterValor();
    //2. pegar a categoria informada
    const categoriaInformada = obterCategoriaInformada();
    
    //3. impedir numeros negativos
    if (valorNegativo(valorInformado)) {
        alert('Valor não pode ser negativo');
        return;
    }

    const categoria = obterCategoria(matrizGastos, categoriaInformada);
    const total = obterCategoria(matrizGastos, 'Total');
    atualizarValorCategoria(categoria, valorInformado);
    atualizarValorCategoria(total, valorInformado);
    atualizarInterface();
    limparCampos();
}
