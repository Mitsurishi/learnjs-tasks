/*В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.*/

function getLocalDay(date) {
    let dayOfWeek = date.getDay();
    if (dayOfWeek === 0) {
        dayOfWeek = 7;
    }
    return dayOfWeek;
}

let date = new Date(2012, 0, 8);
console.log(getLocalDay(date));    