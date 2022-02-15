let employees = [
    {
        firstName: 'Johny',
        lastName: 'Doey',
        age: 27,
        joinedDate: 'December 15, 2017'
    },

    {
        firstName: 'Anand',
        lastName: 'rahane',
        age: 25,
        joinedDate: 'January 15, 2019'
    },

    {
        firstName: 'seema',
        lastName: 'mehta',
        age: 30,
        joinedDate: 'February 15, 2011'
    }
];
//sort array
employees.sort((a, b) => {
    return a.age - b.age;
});
//To display the employee
employees.forEach((e) => {
    console.log(`${e.firstName} ${e.lastName} ${e.age}`);
});