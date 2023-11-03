let readlineSync = require('readline-sync')
let zin = readlineSync.question("Zeg iets: ")
console.log(gemocktZin(zin))
function gemocktZin(zin){
    let vernieuwdeZin = ""
    for (let i = 0; i < zin.length; i++) {
        let element = zin[i]
        if (i % 2 == 0) {
            element = element.toUpperCase()
        }
        vernieuwdeZin += element
    }
    return vernieuwdeZin
}