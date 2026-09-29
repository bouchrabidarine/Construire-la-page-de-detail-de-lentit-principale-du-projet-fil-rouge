let score=14;
let seuil=10;

console.log(score === seuil);
console.log(seuil >= score);
console.log(score !== seuil);
// // --- Stocker un resultat ---

let estVadilie= score >= seuil;
console.log(estVadilie);

// --- Operateurs logiques ---

let inscrit = true;
let paiement = false;

let acces= score >=seuil && inscrit == true;
console.log(acces);
 
let entree= inscrit=true || paiement== true; 
console.log(entree);


