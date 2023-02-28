/*Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Из каждой группы анаграмм должно остаться только одно слово, не важно какое.*/

function aclean(arr) {
    let map = new Map();
    arr.forEach(word => {
        let sortedWord = word.toLowerCase().split('').sort().join('');
        map.set(sortedWord, word);
    })
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));