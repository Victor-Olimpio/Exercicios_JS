
/*Escreva uma função que verifique se o vetor de habilidades passado possui
a habilidade "Javascript" e retorna um booleano true/false caso exista ou não.*/

function programmerSkills(skillsPeople) {
    let existJavaScript = skillsPeople.indexOf("JavaScript");
    if (existJavaScript == -1) {
        console.log("Este programador não sabe JavaScript!");
    } else {
        console.log("Este programador sabe JavaScript!");
    }
}

var skills = ["JavaScript", "React Native", "Python"];
programmerSkills(skills);