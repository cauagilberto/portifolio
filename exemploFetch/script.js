//Ouvir o evento de submit do campo do CEP

document.getElementById("cep").addEventListener("blur", (event)=> {
    const elemento = event.target;
    const cepInformado = elemento.value;
    //Validar o CEP
    if(!(cepInformado.length === 8))
        return;
    //Fazer a requisição para a API do ViaCEP
    //promessa do fetch para buscar o endereço
    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then(response => response.json())
        .then(data => {
            //Preencher os campos do formulário com os dados retornados pela API
            if(!data.erro){
                document.getElementById('logradouro').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('estado').value = data.uf;
                //document.getElementById('numero').value = data.numero;
            } else {
                alert("CEP não encontrado!");
            }
        })
        .catch(error => {
            console.error('Erro ao buscar o endereço:', error);
        });

});