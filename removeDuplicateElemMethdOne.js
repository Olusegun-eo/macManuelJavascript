// METHOD ONE OF REMOVING DUPLICATE ELEMENTS

let chars = ["A", "B", "A", "C", "D", "B"];

let uniqeCharacter = chars.filter( (char, index) => {
    return chars.indexOf(char) === index;
})
console.log(uniqeCharacter)




// METHOD TWO OF REMOVING DUPLICATE ELEMENTS
let uniqeCharacterTwo = [... new Set(chars)]
console.log(uniqeCharacterTwo)


// METHOD TWO OF REMOVING DUPLICATE ELEMENTS
// The indexOf() method returns the index of the first occurrence of an element in an array.
// The duplicate item is the item whose its index is different from its indexOf() value:
console.log()
chars.forEach( (char, index) => {
    if (index === chars.indexOf(char))
    console.log(`${char} - ${index} - ${chars.indexOf(char)}`);
})

console.log()
console.log()


// THIS WILL PRINT FOR DUPLICATED CHAR
chars.forEach( (char, index) => {
    if (index !== chars.indexOf(char))
    console.log(`${char} - ${index} - ${chars.indexOf(char)}`);
})



// METHOD THREE OF REMOVING DUPLICATE ELEMENTS
console.log()
let uniqeCharacterThree = [];

chars.forEach( (char, index) => {
    if(!uniqeCharacterThree.includes(char)){
        uniqeCharacterThree.push(char)
    }
})
console.log(uniqeCharacterThree)