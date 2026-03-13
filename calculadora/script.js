function calcularDesconto() {
     

    //entrada de dados
    let valorOriginal = document.getElementById('valor').value;
    let desconto = document.getElementById('desconto').value;

    //processamento
    let calcular = (valorOriginal * desconto) / 100;
    let valorFinal = valorOriginal - calcular;

    //saida
    document.getElementById('resultado').innerHTML = `O valor final é: ${valorFinal}`;

}


/*nomeclatura de variáveis
- nao pode ter espaços
- nao pode começar com números
- pode conter letras, números e underscores
- deve ser descritiva
- deve seguir um padrão de escrita (camelCase, snake_case, etc.)

variaveis:
var let ou const - para declarar uma variavel
atribuição de valor - usando o operador de atribuição (=)
tipos de dados - string, number, boolean, array, object, etc.
operadores - aritméticos (+, -, *, /, %, ++, --), de comparação (==, ===, !=, !==, >, <, >=, <=), lógicos (&&, ||, !), etc.
*/