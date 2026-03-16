/*
    elaborar um problema para um cinema, onde o usuário possa digitar o titulo do filme, e a duração do filme em minutos e o programa deve calcular quantas horas e minutos o filme tem, e exibir a mensagem "O filme [titulo] tem [horas] horas e [minutos] minutos"

    1. obter o nome do filme
    2. obter a duração do filme em minutos
    3. calcular as horas e minutos
        3.1. horas = duração em minutos / 60
        3.2. minutos = duração em minutos % 60
        3.3. arredondar as horas para baixo
    4. exibir a mensagem com o resultado
*/

function calcularDuracaoFilme(){

const titulo = document.getElementById('titulo').value;
const duracao = document.getElementById('duracao').value;

const horas = Math.floor(duracao / 60);
const minutos = duracao - horas * 60;

document.getElementById('tituloFilme').textContent = `O filme ${titulo}`;
document.getElementById('duracaoHoras').textContent = `tem ${horas} horas e ${minutos} minutos`;

}