function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-zа-я0-9]/g, '');
    const reversed = cleanStr.split('').reverse().join('');
    return cleanStr === reversed;
}
console.log(isPalindrome("Шалаш"));
console.log(isPalindrome("Колледж"));
