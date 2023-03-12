//Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(10));