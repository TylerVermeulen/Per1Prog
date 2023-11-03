var readlineSync = require('readline-sync');

let leeftijd = readlineSync.question('Goedenavond hoe oud bent u?');
if (leeftijd > 18){
    let id = readlineSync.question('Mag ik je id zien?');
    if (id == "ja"){
        console.log("Dan mag u door.");
    } else {
        console.log("Sorry dan mag u niet naar binnen.");
    }
} else {
    console.log("Sorry dan mag u niet naar binnen.");
}