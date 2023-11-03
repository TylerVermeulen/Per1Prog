var readlineSync = require('readline-sync');


function men(){
    console.log("Men really like woman")
}
function woman(){
        console.log("Woman really like men")
}

men()
woman()
var a = readlineSync.question('Wat is nummer 1?');
var b = readlineSync.question('Wat is nummer 2?');
function plus(nummer1, nummer2){
    var nummer3 = nummer1 + nummer2;
    console.log(nummer3);
}
plus(a, b)