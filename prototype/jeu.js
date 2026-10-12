const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
     output: process.stdout
})

let secret = Math.floor(Math.random()*100)+1
let essai = 0

function start(){

    rl.question("chose a number from 1 to 100 :", function(reponse){

        let number = Number(reponse);
    essai++;

    if( number > secret){
        console.log("cest plus petit !")
        start();

    }else if( number < secret ){
        console.log("cest plus grand !")
        start();

    }else{
        console.log("Bravo !")
        console.log(" essie :" +essai)
        rl.close();
    }

    });
}
start()
