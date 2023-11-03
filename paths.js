let rl = require('readline-sync');

console.log("Choose a path:");

console.log("N (North)");
console.log("S (South)");
console.log("E (East)");
console.log("W (West)");
const answer = rl.question('Please input the letter of your choice');

if (answer == "N"){
    console.log("you go see G O D");
} else if (answer == "S"){
    console.log("Welkom to hell(Limburg) hope ya like it here :)");
} else if (answer == "E"){
    console.log("You have arrived at the bri ish place av a bo o o wa e XD")
} else if (answer == "W"){
    console.log("Welkom in de boot naar texel")
} else {
    console.log("go suck a chicken dumbass")
}