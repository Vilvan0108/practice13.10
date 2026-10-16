function sortNumbers(arr, direction = 'up') {
    return arr.sort((a, b) => direction === 'up' ? a - b : b - a);
}
console.log(sortNumbers([25, 3, 89, 14, 7, 42], 'up'));
console.log(sortNumbers([25, 3, 89, 14, 7, 42], 'down'));
