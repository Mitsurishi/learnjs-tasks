/*Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.*/

function filterRangeInPlace(arr, a, b) {
    arr.forEach((element, index) => {
        if (!(element >= a && element <= b)) {
            return arr.splice(index, 1);
        }
    });
    return arr;
}

let arr = [5, 3, 8, 1];
console.log(filterRangeInPlace(arr, 1, 4));