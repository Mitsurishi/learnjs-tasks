function checkSpam(str) {
    let str2 = str.toLowerCase();
    if (str2.includes('viagra') || str2.includes('xxx')) {
        return true;
    }
    return false;
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));