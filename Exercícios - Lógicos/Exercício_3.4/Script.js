
//Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é!

function userExperience(years) {
    if (years == 0 || years == 1) {
        return console.log("Você é um Dev Iniciante!");
    } else if (years > 1 && years <= 3) {
        return console.log("Você é um Dev Júnior!");
    } else if (years > 3 && years <= 6) {
        return console.log("Você é um Dev Pleno!");
    } else if (years >= 7) {
        return console.log("Você é um Dev Sênior!");
    }
}

var studyYears = 10;
userExperience(studyYears)