//Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

function getSecondsToTomorrow() {
    let dateNow = new Date();
    let dateTomorrow = new Date(dateNow.getFullYear(), dateNow.getMonth(), (dateNow.getDate() + 1));
    let diff = dateTomorrow - dateNow;
    return Math.round(diff * 0.001);
}

console.log(getSecondsToTomorrow());
