let heuteur = 5 ;
if(heuteur > 0){
    for(let ligne=1 ; ligne<=heuteur;ligne++){
        let ligneTexte="";
        for(let s=1 ; s <= heuteur - ligne; s++){
            ligneTexte = ligneTexte + " ";
        }
        for(let e=1 ; e <= (2*ligne)-1;e++){
            ligneTexte = ligneTexte + "*";
        }
        console.log(ligneTexte);
    }
}else{
    console.log("heuteur invalide");
}
