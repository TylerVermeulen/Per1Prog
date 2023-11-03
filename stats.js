
function dicing(){



    function rolldice(){
    let rand = Math.ceil(Math.random() * 6)
    return rand
    }

    rolldice()

    let roll1 = rolldice()
    let roll2 = rolldice()
    let roll3 = rolldice()
    let roll4 = rolldice()
    let sorting = [roll1, roll2, roll3, roll4]
    sorting.sort()
    sorting.reverse()
    sorting.pop()
    let total = sorting[0] + sorting[1] + sorting[2]
    return total
}

let pengis1 = dicing()
let pengis2 = dicing()
let pengis3 = dicing()
let pengis4 = dicing()
let pengis5 = dicing()
let pengis6 = dicing()

console.log("STR =", pengis1)
console.log("DEX =", pengis2)
console.log("CON =", pengis3)
console.log("INT =", pengis4)
console.log("WIS =", pengis5)
console.log("CHA =", pengis6)