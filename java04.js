let nome = "Murilo de Oliveira Souza";
let email = nome.split(" ");

let primeiro = email[0].toLowerCase();
let ultimo = email[3].toLowerCase();

let email2 = `${primeiro}.${ultimo}@facens.br`;


console.log(email2);