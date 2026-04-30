
const formataMoeda = (valor) => valor.toFixed(2).replace('.', ',');
const obterElemento = (id) => document.getElementById(id);
export const valorNegativo = (valor) => valor < 0;
export const atualizarInterface = (gastosPorCategoria) => {
    const categorias = gastosPorCategoria.categorias;

    categorias.forEach((categoria) => {
        // Atualizar a interface com o novo valor
        const elemento = obterElemento(categoria.nome);
        elemento.textContent = `${categoria.nome}: R$ ${formataMoeda(categoria.valor)}`;
    });

    const elementoTotal = obterElemento('Total');
    elementoTotal.textContent = `Total: R$ ${formataMoeda(gastosPorCategoria.obterTotal())}`;
}
