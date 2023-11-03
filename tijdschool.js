let huidigeTijd = new Date(2023, 9, 23, 20, 10);
console.log(huidigeTijd.getHours());
if(huidigeTijd.getHours() > 9 && huidigeTijd.getHours < 15){
    console.log("Ik moet op school zijn")
} else if (huidigeTijd.getHours() > 15){
    console.log("Ik mag naar huis")
}