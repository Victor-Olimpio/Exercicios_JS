
//Faça um programa que leia 2 números, some-os e exiba uma mensagem com o resultado apenas se o resultado for maior que 100!

function somarNumber() {
    let numberOne = Number(window.prompt("Digite um número"));
    let numberTwo = Number(window.prompt("Digite outro número"));
    let sumNumber = numberOne + numberTwo;
    return sumNumber;
}

if (somarNumber() > 100) {
    window.alert("A soma entre os números é maior do que 100!");
} else if (somarNumber() == 100) {
    window.alert("A soma entre os números é igual a 100!");
} else {
    window.alert("A soma entre os números é menor do que 100!");
}