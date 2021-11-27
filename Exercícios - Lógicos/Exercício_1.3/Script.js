
//Faça um programa que leia 3 números, some-os e exiba a média entre eles!

var sumNumber = 0;
var arrayNumber = [];
var contadorNumber = 0;
while (contadorNumber < 3) {
    let numberOne = Number(window.prompt(`Digite o ${contadorNumber + 1}º número`));
    arrayNumber.push(numberOne);
    contadorNumber += 1;
}

for (let contador = 0; contador < arrayNumber.length; contador += 1) {
    sumNumber = sumNumber + arrayNumber[contador];
}

let averageNumber = sumNumber / 3;
console.log(`A soma de todos os números digitados é: ${sumNumber}!`);
console.log(`A média entre os números somados é: ${averageNumber}!`);