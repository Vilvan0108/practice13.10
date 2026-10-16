function shortFIO(fullName) {
    const parts = fullName.trim().split(/\s+/);
    if (parts.length < 3) return fullName;
    return `${parts[0]} ${parts[1][0]}. ${parts[2][0]}.`;
}
console.log(shortFIO("Иванов Иван Иванович"));
