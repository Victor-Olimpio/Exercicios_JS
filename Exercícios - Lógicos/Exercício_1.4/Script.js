
//Faça um programa que leia do usuário uma temperatura em Celsius, converta-a para Fahrenheit e escreva o novo valor na tela!

var grausPessoa = parseFloat(window.prompt("Informe a sua temperatura em ºC"));
function converterGraus() {
    let temperaturaFinal = parseFloat(((grausPessoa * 9) / 5) + 32);
    return temperaturaFinal;
}

document.writeln(`${grausPessoa}ºC convetido para Fahrenheit é igual a: ${converterGraus()}ºF!`);