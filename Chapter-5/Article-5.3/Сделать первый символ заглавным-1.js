//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

function ucFirst(str) {
    let str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2;
}

console.log(ucFirst('вася'));