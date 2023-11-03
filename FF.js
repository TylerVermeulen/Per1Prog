var readlineSync = require('readline-sync');


let playerName = "Squall";
let playerHealth = 17;
let playerMana = 6;
let fireballcost = 3;
let fireballDamage = 6;
let whackDamage = 2
function run()
{
    if (readlineSync.keyInYN('Do you want to run?') == true) {
        console.log("You ran away from", enemyName)
        return true;
    }
    return false;
}

function Randomizer(maxLimit = 7){
        let nummer = Math.random() * maxLimit;
        nummer = Math.floor(nummer)
        return nummer;
}

function Miqo_te(){
    let enemyHealth = 15;
    let enemyName = "Yshtola"
    console.log("You encounter", enemyName)
    console.log(enemyName, "Has", enemyHealth, "HP")
    console.log("You have", playerHealth, "HP")
    console.log("You have", playerMana, "Mana")
    while (enemyHealth > 0 && run() == false ||playerHealth < 0){
        let enemyDamage = Randomizer(6);
        console.log("You can do:")
        console.log("1 - Fireball")
        let whichMove = readlineSync.question('2 - Whack')
        if (whichMove == 1 && playerMana > 0){
            console.log("You use Fireball")
            enemyHealth = enemyHealth - fireballDamage
            playerMana = playerMana - fireballcost
            console.log("You dealt", fireballDamage, "damage")
        } else if (whichMove == 2){
            console.log("You use Whack")
            enemyHealth = enemyHealth - whackDamage
            console.log("You dealt", whackDamage, "damage")
        } else if (whichMove == 1 && playerMana < 0){
            console.log("You have no mana")
            console.log("You used whack")
            enemyHealth = enemyHealth - whackDamage
            console.log("You dealt", whackDamage, "damage")
        }
        playerHealth = playerHealth - enemyDamage
        console.log(enemyName, "Dealt", enemyDamage, "damage")
        console.log(enemyName, "Has", enemyHealth, "HP")
        console.log("You have", playerHealth, "HP")
        console.log("You have", playerMana, "Mana")
        if (enemyHealth <= 0){
            console.log("You defeated", enemyName)
            break
        }
    }
}

Miqo_te()