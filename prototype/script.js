// 1. Générer le nombre secret entre 1 et 100
let nombreSecret = Math.floor(Math.random() * 100) + 1;

// 2. Compteur d'essais
let essais = 0;

console.log("=== Jeu : Devine le nombre ===");
console.log("Devinez un nombre entre 1 et 100");

// Pour lire la saisie dans le terminal
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function demanderNombre() {

    rl.question("Votre nombre : ", function(saisie) {

        // Ajouter +1 au compteur
        essais++;

        // Transformer la saisie en nombre
        let nombre = Number(saisie);

        // Vérifier si la saisie est valide
        if (isNaN(nombre) || nombre < 1 || nombre > 100) {

            console.log("Ce n'est pas valide !");
            demanderNombre();

        }

        // Le nombre est trop petit
        else if (nombre < nombreSecret) {

            console.log("C'est PLUS grand !");
            demanderNombre();

        }

        // Le nombre est trop grand
        else if (nombre > nombreSecret) {

            console.log("C'est PLUS petit !");
            demanderNombre();

        }

        // Le nombre est correct
        else {

            console.log("🎉 Bravo ! Vous avez trouvé le nombre secret !");
            console.log("Nombre d'essais : " + essais);

            rl.close();
        }
    });
}

// Commencer le jeu
demanderNombre();
