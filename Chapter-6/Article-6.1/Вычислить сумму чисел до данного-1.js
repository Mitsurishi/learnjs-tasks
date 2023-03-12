/*Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.*/


//1) Цикл
function sumToCycle(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumToCycle(100));

//2) Рекурсия

function sumToRecursion(n) {
    return (n == 1) ? 1 : (n + sumToRecursion(n - 1));
}

console.log(sumToRecursion(100));

//3) Формула арифметической прогрессии

function sumToProgression(n) {
    return n * (n + 1) / 2;
}

console.log(sumToProgression(100));