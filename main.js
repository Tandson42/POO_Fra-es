//Pegando os valores dos formulários para cada tipo de operação
document.getElementById("soma").addEventListener("click", function() {
    const numerador1 = parseFloat(document.getElementById("numera1").value);
    const denominador1 = parseFloat(document.getElementById("denomi1").value);
    const numerador2 = parseFloat(document.getElementById("numera2").value);
    const denominador2 = parseFloat(document.getElementById("denomi2").value);

    const fracao1 = new Fracao(numerador1, denominador1);
    const fracao2 = new Fracao(numerador2, denominador2);

    const resultado = fracao1.somarFracao(fracao2);

    document.getElementById("res").innerText = "Resultado da soma: " + resultado.imprimir();
});
document.getElementById("subtrair").addEventListener("click", function() {
    const numerador1 = parseFloat(document.getElementById("numera1").value);
    const denominador1 = parseFloat(document.getElementById("denomi1").value);
    const numerador2 = parseFloat(document.getElementById("numera2").value);
    const denominador2 = parseFloat(document.getElementById("denomi2").value);

    const fracao1 = new Fracao(numerador1, denominador1);
    const fracao2 = new Fracao(numerador2, denominador2);

    const resultado = fracao1.subtrairFracao(fracao2);

    document.getElementById("res").innerText = "Resultado da subtração: " + resultado.imprimir();
});
document.getElementById("multiplicar").addEventListener("click", function() {
    const numerador1 = parseFloat(document.getElementById("numera1").value);
    const denominador1 = parseFloat(document.getElementById("denomi1").value);
    const numerador2 = parseFloat(document.getElementById("numera2").value);
    const denominador2 = parseFloat(document.getElementById("denomi2").value);

    const fracao1 = new Fracao(numerador1, denominador1);
    const fracao2 = new Fracao(numerador2, denominador2);

    const resultado = fracao1.multiplicarFracao(fracao2);

    document.getElementById("res").innerText = "Resultado da multiplicação: " + resultado.imprimir();
});

document.getElementById("dividir").addEventListener("click", function() {
    const numerador1 = parseFloat(document.getElementById("numera1").value);
    const denominador1 = parseFloat(document.getElementById("denomi1").value);
    const numerador2 = parseFloat(document.getElementById("numera2").value);
    const denominador2 = parseFloat(document.getElementById("denomi2").value);

    const fracao1 = new Fracao(numerador1, denominador1);
    const fracao2 = new Fracao(numerador2, denominador2);

    const resultado = fracao1.dividirFracao(fracao2);

    document.getElementById("res").innerText = "Resultado da divisão: " + resultado.imprimir();
});

//Implementação da classe
class Fracao {
    constructor(numerador, denominador) {
        this._numerador = parseInt(numerador);
        this._denominador = parseInt(denominador);
    }

    // Métodos de acesso aos atributos
    get numerador() {
        return this._numerador;
    }

    set numerador(value) {
        this._numerador = parseInt(value);
    }

    get denominador() {
        return this._denominador;
    }

    set denominador(value) {
        if (parseInt(value) !== 0) {
            this._denominador = parseInt(value);
        } else {
            console.error("O denominador não pode ser zero.");
        }
    }

    // Métodos para realizar operações com frações
    somarFracao(outraFracao) {
        const novoNumerador = (this.numerador * outraFracao.denominador) + (outraFracao.numerador * this.denominador);
        const novoDenominador = this.denominador * outraFracao.denominador;
        return new Fracao(novoNumerador, novoDenominador);
    }

    subtrairFracao(outraFracao) {
        const novoNumerador = (this.numerador * outraFracao.denominador) - (outraFracao.numerador * this.denominador);
        const novoDenominador = this.denominador * outraFracao.denominador;
        return new Fracao(novoNumerador, novoDenominador);
    }

    multiplicarFracao(outraFracao) {
        const novoNumerador = this.numerador * outraFracao.numerador;
        const novoDenominador = this.denominador * outraFracao.denominador;
        return new Fracao(novoNumerador, novoDenominador);
    }

    dividirFracao(outraFracao) {
        if (outraFracao.numerador !== 0) {
            const novoNumerador = this.numerador * outraFracao.denominador;
            const novoDenominador = this.denominador * outraFracao.numerador;
            return new Fracao(novoNumerador, novoDenominador);
        } else {
            console.error("Impossível dividir por zero.");
            return null;
        }
    }

    // Método para imprimir a fração na tela
    imprimir() {
        return `${this.numerador} / ${this.denominador}`;
    }
}