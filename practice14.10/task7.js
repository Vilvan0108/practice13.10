function getSecondLargest(arr) {
    const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueSorted.length >= 2 ? uniqueSorted[1] : null;
}
console.log(getSecondLargest([10, 5, 10, 8, 3, 8]));
console.log(getSecondLargest([5]));
