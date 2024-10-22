function mail(email) {
    let partes = email.split('@');

    if (partes.length === 2 && partes[1].includes(".")) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}


mail("murilo222murilo@gmail.com");