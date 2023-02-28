/*На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.*/

function getMaxSubSum(arr) {
    let maxSum = 0;
    for (i = 0; i < arr.length; i++) {
        let sum = 0;
        for (j = i; j < arr.length; j++) {
            sum += arr[j];
            maxSum = Math.max(maxSum, sum);
        }
    }

    return maxSum;
}

let arr1 = [-1, 2, 3, -9, 11];
let arr2 = [2, -1, 2, 3, -9];
let arr3 = [-1, 2, 3, -9];
let arr4 = [1, 2, 3];
console.log(getMaxSubSum(arr1));
console.log(getMaxSubSum(arr2));
console.log(getMaxSubSum(arr3));
console.log(getMaxSubSum(arr4));