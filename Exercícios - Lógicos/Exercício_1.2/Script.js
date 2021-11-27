
//Faça um programa que leia 3 números e exiba-os na tela!

var numberDigitado = [];
var numberCounter = 0;
while (numberCounter < 3) {
    let numberOne = Number(window.prompt("Digite um número: "));
    numberDigitado.push(numberOne);
    numberCounter += 1;
}

for (let contador = 0; contador < numberDigitado.length; contador += 1) {
    console.log(`O ${contador + 1}º número digitado foi: ${numberDigitado[contador]}!`);
}