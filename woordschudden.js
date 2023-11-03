function schudden(woordDatGeschudtMoetWorden){
const characters = woordDatGeschudtMoetWorden.split('');
  for (let i = characters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [characters[i], characters[j]] = [characters[j], characters[i]];
  }
  const geschudWoord = characters.join('');

  return geschudWoord
}
var woord1 = schudden("Boekenkast");
console.log(woord1);
var woord2 = schudden("Afrikaanse aap");
console.log(woord2);
var woord3 = schudden("Siberian Husky");
console.log(woord3);