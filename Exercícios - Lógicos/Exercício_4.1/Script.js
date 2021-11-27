
//Escreva um programa que calcule e mostre a tabuada (até 10x) de um número qualquer, digitado pelo usuário!

function multiplicationNumber(numberChose) {
    for (let contador = 0; contador < 11; contador += 1)
    document.writeln(`${numberChose} x ${contador} = ${numberChose * contador}` + "<br>");
}

var userNumber = Number(window.prompt("Digite um número a sua escolha"));
multiplicationNumber(userNumber);