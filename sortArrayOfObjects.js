

const objects = [
    { name: 'Edwardo', age: 36, gender: 'male', email: 'ed@gmail.com'},
    { name: 'Zagalo', age: 18, gender: 'female', email: 'zagalo@gmail.com'},
    { name: 'John', age: 40, gender: 'male', email: 'John@gmail.com'},
    {name: 'James', age:12,  gender: 'male', email: 'James@gmail.com'},
    { name: 'Janet', age:17, gender: 'female', email: 'Janet@gmail.com'},
    { name: 'Zainab', age:21, gender: 'female', email: 'Zainab@gmail.com'}
]

// Sort By age
objects.sort( function compareFunction(firstItem, secondItem) {
    return firstItem.age - secondItem.age
})

console.log(objects)


// Sort by name
console.log()
console.log()
console.log()


objects.sort( function compareFunction(firstItem, secondItem) {
    let firstName = firstItem.name.toUpperCase();
    let secondName = secondItem.name.toUpperCase();

    if(firstName < secondName){
        return -1;
    } else if(firstName > secondName){
        return 1;
    }
    return 0;
})
console.log(objects)