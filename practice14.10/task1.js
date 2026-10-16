function getUniqueValues(arr) {
    return [...new Set(arr)];
}
console.log(getUniqueValues([1, 2, 2, 3, 4, 4, 5, 1]));
