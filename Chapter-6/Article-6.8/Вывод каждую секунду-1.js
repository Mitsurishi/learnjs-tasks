/*Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.*/


function printNumbersSetInterval(from, to) {
    let currentTime = from;
    let timerId = setInterval(function () {
        console.log(currentTime);
        if (currentTime == to) {
            clearInterval(timerId);
        }
        currentTime++;
    }, 1000);
}

function printNumbersSetTimeout(from, to) {
    let currentTime = from;
    setTimeout(function run() {
        console.log(currentTime);
        if (currentTime < to) {
            setTimeout(run, 1000);
        }
        currentTime++;
    }, 1000);
}

printNumbersSetInterval(5, 10);
printNumbersSetTimeout(5, 10);