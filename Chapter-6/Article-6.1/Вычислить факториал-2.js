//Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

console.log(factorial(5));