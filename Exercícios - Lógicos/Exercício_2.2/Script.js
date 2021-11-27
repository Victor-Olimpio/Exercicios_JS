
/*Para um jogo, precisamos saber se um personagem morreu ou não depois de sofrer um ataque.
Faça uma função que receba 2 parâmetros, 'dano' e 'saude'. A função deve retornar '1' se o
dano for matar o personagem (ou seja, deixar sua saúde menor ou igual a zero) e '0' caso contrário.*/

function deathPlayer(damagePlayer, healthPlayer) {
    function randomDamage() {
        let damageRandom = Math.floor(Math.random() * 101);
        return damageRandom;
    }

    window.alert(`Você recebeu ${randomDamage()} de dano com o ataque inimigo!`);
    damagePlayer = randomDamage();
    healthPlayer = 100;

    var battleResult = healthPlayer - damagePlayer;

    if (battleResult <= 0) {
        return 0;
    } else {
        return 1;
    }
}

if (deathPlayer() <= 0) {
    window.alert("Você morreu!");
} else {
    window.alert("Você continua vivo!");
}