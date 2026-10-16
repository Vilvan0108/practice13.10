function getSumAndAverage(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const avg = arr.length ? sum / arr.length : 0;
    return { sum, average: avg };
}
console.log(getSumAndAverage([10, 20, 30, 40]));
