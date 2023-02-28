/*Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.*/

function formatDate(date) {
    let time = Date.now() - date;

    switch (true) {
        case time < 1000:
            return `прямо сейчас`;

        case time < 1000 * 60:
            return `${Math.floor(time / 1000)} сек. назад`;

        case time < 1000 * 60 * 60:
            return `${Math.floor(time / 60 / 1000)} мин. назад`;

        default:
            return `${('0' + date.getDate()).split('').slice(-2).join('')}.` +
                `${('0' + (date.getMonth() + 1)).split('').slice(-2).join('')}.` +
                `${date.getFullYear()} ` +
                `${('0' + date.getHours()).split('').slice(-2).join('')}:` +
                `${('0' + date.getMinutes()).split('').slice(-2).join('')}`;
    }
}

console.log(formatDate(new Date(new Date - 1)));
console.log(formatDate(new Date(new Date - 30 * 1000)));
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date - 86400 * 1000)));