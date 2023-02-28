/*Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

P.S. Функция не должна изменять переданный ей объект date.*/

function getDateAgo(date, days) {
    let currentDate = new Date(date);
    currentDate.setDate(date.getDate() - days);
    return currentDate.getDate();
}

let date = new Date(2022, 1, 22);

console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365));