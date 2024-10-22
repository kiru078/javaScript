function invertido(texto) {
    let i;
    let textoinvertido = "";
    for (i = texto.length - 1; i >= 0; i--) {
        textoinvertido += texto[i];
    }
    return textoinvertido;
}
function ex(texto) {
    let textoinvertido = invertido(texto);
    if (texto === textoinvertido) {
        console.log(texto + " é um palíndromo. ");
    } else {
        console.log(texto + " não é um palíndromo");
    }

}

ex("murilo");
ex("sopapos");