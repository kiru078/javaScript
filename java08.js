let string = "Oi, meu nome é Murilo";
let cont = 0;
let i;

for (i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
        cont++;
    }

}

console.log("Numero de vogais: " + cont);