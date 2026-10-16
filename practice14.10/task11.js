function groupByAge(users) {
    const groups = {};
    for (const user of users) {
        const age = user.age;
        if (!groups[age]) groups[age] = [];
        groups[age].push(user);
    }
    return groups;
}
console.log(groupByAge([
    { name: "Иван", age: 18 },
    { name: "Анна", age: 19 },
    { name: "Олег", age: 18 }
]));
