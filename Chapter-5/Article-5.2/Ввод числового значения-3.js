function readNumber() {
    let number;

    do {
        number = prompt('Введите число');
    } while (!isFinite(number));
    if (number === null || number === '') return null;

    return +number;
}

console.log(readNumber());