
/*Faça um programa que leia um vetor numérico de 10 posições.
Depois, ordene o vetor em ordem crescente e apresente os elementos ordenados.*/

var numberArray = [4, 5, 6, 9, 2, 1, 7, 8, 3, 0];
for (let contador = 0; contador < numberArray.length; contador += 1) {
    numberArray.sort();
    console.log(`O ${contador + 1}º número do array é ${numberArray[contador]}`);
}