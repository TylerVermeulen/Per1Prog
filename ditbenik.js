var readlineSync = require('readline-sync');

console.log("Hello You!");
console.log("Ik ben Tyler");
var punten = 0
var naam = readlineSync.question('Wie ben jij?');
console.log("Hello" + naam);
console.log("Om mij beter te leren kennen gaan wij een quiz doen. Door het beantwoorden van de vragen leer je mij kennen.")

console.log("Waar woon ik?");

console.log("1 - Den Helder");
console.log("2 - Enkhuizen");
var vraag1 = readlineSync.question('3 - Amsterdam');
if (vraag1 == 1){
    antwoord = "Goed zo nu de volgende vraag";
    punten = punten + 1
} else {
    antwoord = "Helaas die heb je Hem fout op naar de volgende"
}
console.log(antwoord)

console.log("Hoe oud ben ik?")

console.log("1 - 15")
console.log("2 - 16")
var vraag2 = readlineSync.question('3 - 17')
if (vraag2 == 1){
    antwoord = "Goed zo nu de volgende vraag"
    punten = punten + 1
} else {
    antwoord = "Helaas die heb je Hem fout op naar de volgende"
}
console.log(antwoord)

console.log("Welk spel heb ik de meeste uren op?")

console.log("1 - Final Fantasy 14")
console.log("2 - Team Fortress 2")
var vraag3 = readlineSync.question('3 - League of Legends')
if (vraag3 == 2){
    antwoord = "Goed zo nu naar de volgende vraag"
    punten = punten + 1
} else {
    antwoord = "Helaas die heb je Hem fout op naar de volgende"
}
console.log(antwoord)

console.log("Wat is mijn favoriete kleur?")

console.log("1 - Blauw")
console.log("2 - oranje")
var vraag4 = readlineSync.question('3 - zwart')
if (vraag4 == 3){
    antwoord = "Goed zo nu naar de volgende vraag"
    punten = punten + 1
} else {
    antwoord = "Helaas die heb je Hem fout op naar de volgende"
}

console.log("Hoe heet mijn poes?")

console.log("1 - Muffin")
console.log("2 - Djinkie")
var vraag5 = readlineSync.question('3 - djenkins')
if (vraag5 == 2){
    antwoord = "Goed zo nu naar de volgende vraag"
    punten = punten + 1
} else {
    antwoord = "Helaas die heb je Hem fout op naar de volgende"
}


console.log("Dat was de quiz jij hebt", punten, "Punten")
if (punten == 0){
    console.log("Je kent mij echt niet he?")
} else if (punten = 1){
    console.log("Maar eentje.... Serieus!?!??!")
} else if (punten = 2){
    ("ehh beter dan niks i guess")
} else if (punten = 3){
    console.log("Ya did decent i guess")
} else if (punten = 4){
    console.log("Bijna perfect Good job")
} else if (punten = 5){
    console.log("Perfect YOU DID GREAT")
}
console.log("Laters")