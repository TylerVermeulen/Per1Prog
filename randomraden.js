var readlineSync = require('readline-sync');

function generateRandom(maxLimit = 100){
    let rand = Math.random() * maxLimit;
    rand = Math.floor(rand)
    return rand;
}


function raden(){
    var antwoord = generateRandom(maxLimit = 100);
    console.log(antwoord)
    while (geradennummer != antwoord){
        var geradennummer = readlineSync.question('Welk nummer is het?');
        if (geradennummer < antwoord){
            console.log("hoger")
        } else if (geradennummer > antwoord){
            console.log("lager");
        } 
    }
    console.log("Goed zo")
}


raden()