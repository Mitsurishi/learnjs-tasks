//Возможно ли создать функции A и B, чтобы new A() == new B()?

let object = {};

function A() {
    return object;
}
function B() {
    return object;
}

console.log(new A() === new B());