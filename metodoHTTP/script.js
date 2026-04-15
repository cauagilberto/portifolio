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
});

//fazendo post atraves da aba do navegador
document.getElementById('add').addEventListener('click', () => {
    //pega descrição do input do usuario
    const descricao = document.getElementById('tarefa').value;
    //faz um POST para a API para criar uma nova tarefa
    fetch("https://crudcrud.com/api/472f20fad5e04b0f99ada92bac78a6a0/tarefas", {
        //definindo como POST, mas poderia ser PUT, DELETE, etc
        method: "POST",
        //definindo o tipo de conteúdo como JSON
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ descricao: descricao }) //envia a descrição da tarefa como JSON
    })
    .then(response => response.json()) //converte a resposta para JSON
    .then((tarefa) => {
        //cria um elemento li para cada tarefa
        const item = document.createElement('li');
        //define o conteúdo do item com a descrição da tarefa e um botão de excluir
        item.innerHTML = `${tarefa.descricao} <button>X</button>`;
        //adiciona novo item a lista
        tarefas.appendChild(item);
    })

})