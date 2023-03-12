/*Напишите функцию printList(list), которая выводит элементы списка по одному.

Сделайте два варианта решения: используя цикл и через рекурсию.*/

//1) Цикл

function printListCycle(list) {
    let pointer = list;
    while (pointer) {
        console.log(pointer.value);
        pointer = pointer.next;
    }
}

//2) Рекурсия

function printListRecursion(list) {
    while (list) {
        console.log(list.value);
        list = list.next;
    }
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

printListCycle(list);
printListRecursion(list);