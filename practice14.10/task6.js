function countWords(str) {
    const words = str.toLowerCase().match(/[a-zа-яё0-9]+/g) || [];
    const result = {};
    for (const word of words) {
        result[word] = (result[word] || 0) + 1;
    }
    return result;
}
console.log(countWords("Привет мир и привет студент"));
