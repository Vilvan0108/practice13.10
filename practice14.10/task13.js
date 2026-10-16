function getIntersection(arr1, arr2) {
    const set2 = new Set(arr2);
    return arr1.filter(item => set2.has(item));
}
console.log(getIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
