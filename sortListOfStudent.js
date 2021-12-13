let students = [
    {name: "Alexander", grade: 10},
    {name: "John", grade: 10},
    {name: "James", grade: 14},
    {name: "Delvin", grade: 15},
    {name: "Eagle", grade: 12},
    {name: "Samuel", grade: 9}
]
let studentSorted = students.sort( (firstItem, secondItem) => {
    return (firstItem.grade - secondItem.grade)} );
console.log(studentSorted);
