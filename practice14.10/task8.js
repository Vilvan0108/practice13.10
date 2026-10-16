function getAverageGrade(grades) {
    if (!grades.length) return 0;
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    return Number((sum / grades.length).toFixed(2));
}
console.log(getAverageGrade([4, 5, 3, 5, 4]));
