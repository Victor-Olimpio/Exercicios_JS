
//Faça um programa que exiba 3 números na tela!

for (let contador = 0; contador < 3; contador += 1) {
    console.log(`O ${contador + 1}º número foi ${randomNumber()}`);
}

function randomNumber() {
    var numberRandom = Math.floor(Math.random() * 10);
    return numberRandom;
}