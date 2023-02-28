//Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

function getSecondsToday() {
    let currentSeconds = new Date();
    return currentSeconds.getHours() * 3600 + currentSeconds.getMinutes() * 60 + currentSeconds.getSeconds();
}

console.log(getSecondsToday());