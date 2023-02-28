function topSalary(salaries) {
    if (Object.keys(salaries) == 0) {
        return null;
    } else {
        let [maxSalary] = Object.entries(salaries).sort((a, b) => b[1] - a[1]);
        return maxSalary[0];
    }
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries));

