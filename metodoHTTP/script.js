// Seleciona o elemento da lista de tarefas
const tarefas = document.getElementById('listaTarefa');

//faz um GET para a API busca as tarefas
fetch("https://crudcrud.com/api/472f20fad5e04b0f99ada92bac78a6a0/tarefas")
.then(response => response.json()) //converte a resposta para JSON
.then((listaDeTarefas) => {
    //itera sobre cada tarefa do array
    listaDeTarefas.forEach(tarefa => {
        //cria um elemento li para cada tarefa
        const item = document.createElement('li');
        //define o conteúdo do item com a descrição da tarefa e um botão de excluir
        item.innerHTML = `${tarefa.descricao} <button>X</button>`;
        //adiciona novo item a lista
        tarefas.appendChild(item);
    });
})