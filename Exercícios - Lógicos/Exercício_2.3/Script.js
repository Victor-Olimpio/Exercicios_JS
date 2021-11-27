
/*Precisamos limitar as posições em que um inimigo pode andar na tela.
A menor posição possível é 0 e a maior, 100: qualquer valor maior que
100 ou menor que 0 sairia fora da tela. Precisamos de uma função LimitaPosicao
que recebe uma POSICAO que pode ter qualquer valor positivo ou negativo, verifica
se ela é válida ou não e retorna sempre um valor corrigido entre 0 e 100!*/

function randomPosition() {
    return Math.floor(Math.random() * 100) + -10;
}

var positionLimit = (positionEnemy) => {
    positionEnemy = randomPosition();
    window.alert(`O inimigo andou para a posição ${randomPosition()}`)
    if (positionEnemy > 100 || positionEnemy < 0) {
        window.alert("Essa posição é inválida!");
    } else {
        window.alert("Essa posição é válida!");
    }
}

positionLimit();