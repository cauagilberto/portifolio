function calcularIMC() {

    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);

    if (peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos para peso e altura.";
        document.getElementById("classificacao").innerHTML = "";
        return;
    }

    let calcular = peso / (altura * altura);
    calcular = calcular.toFixed(2);

    document.getElementById("resultado").innerHTML = `O seu IMC é: ${calcular}`;

    if (calcular < 18.5) {
        document.getElementById("classificacao").innerHTML = "Classificação: Abaixo do peso";
    }
    else if (calcular >= 18.5 && calcular < 24.9) {
        document.getElementById("classificacao").innerHTML = "Classificação: Peso normal";
    }
    else if (calcular >= 25 && calcular < 29.9) {
        document.getElementById("classificacao").innerHTML = "Classificação: Sobrepeso";
    }
    else if (calcular >= 30 && calcular < 34.9) {
        document.getElementById("classificacao").innerHTML = "Classificação: Obesidade grau 1";
    }
    else if (calcular >= 35 && calcular < 39.9) {
        document.getElementById("classificacao").innerHTML = "Classificação: Obesidade grau 2";
    }
    else {
        document.getElementById("classificacao").innerHTML = "Classificação: Obesidade grau 3";
    }

    
}
