const botaoTema = document.getElementById("botaoTema");

botaoTema.addEventListener("click", () => {
    //verficar se o usuario ja tem tema
    const temaAtual = localStorage.getItem("tema");
    const temaNovo = temaAtual === "dark" ? "light" : "dark";

    //verificar qual o tema atual
    document.body.classList.remove("dark", "light");
    document.body.classList.add(temaNovo);

    //salvar tema no localStorage
    localStorage.setItem("tema", temaNovo);

    //atualizar o texto do botão
    botaoTema.textContent = temaNovo === "dark" ? "*" : "/";
});


document.addEventListener("DOMContentLoaded", () => {
    //verificar se o usuario ja tem tema salvo
    const temaSalvo = localStorage.getItem("tema");

    //se for dark adiciona a classe e altera o botão
    if (temaSalvo === "dark") {
        document.body.classList.add("dark");
        botaoTema.textContent = "*";
    } else {
        document.body.classList.add("light");
        botaoTema.textContent = "/";
    }
});