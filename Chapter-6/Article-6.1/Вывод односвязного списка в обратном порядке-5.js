/*Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

Сделайте два решения: с использованием цикла и через рекурсию.*/

//1) Цикл

function printReverseListCycle(list) {
    let reversed = []
    let pointerList = list
    while (pointerList) {
        reversed.push(pointerList.value)
        pointerList = pointerList.next
    }
    reversed.reverse()
    for (let key of reversed) {
        console.log(key)
    }
}

//2) Рекурсия
function printReverseListRecursion(list) {
    if (list.next) {
        printReverseListRecursion(list.next);
    }
    console.log(list.value);
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

printReverseListCycle(list);
printReverseListRecursion(list);
