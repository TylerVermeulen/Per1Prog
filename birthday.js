var readlineSync = require('readline-sync');
function leeftijd(){
    var geboortejaar = readlineSync.question('Welk jaar ben je geboren?')
    var geboortemaand = readlineSync.question('Welke maand ben je geboren?')
    var geboortedag = readlineSync.question('Welke dag ben je jarig?')
    let now = new Date();
    let birth = new Date(geboortejaar, geboortemaand, geboortedag); 
    let miliseconds = now-birth;
    let jaren = miliseconds/1000/60/60/24/365  
    return jaren
}
let jaar = leeftijd()

console.log(jaar)
