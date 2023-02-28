/*Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.*/

function camelize(str) {
    let strCamel = str.split('-');
    strCamel = strCamel.map((item, index) => {
        if (index !== 0) {
            return item[0].toUpperCase() + item.slice(1);
        }
        return item;
    })
    return strCamel.join('');
}


console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));