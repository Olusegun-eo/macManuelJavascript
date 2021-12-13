// To create an array with non-zero length, but without any items, either of the following can be used:

// This...
let arr = new Array(arrayLength)

// ...results in the same array as this
let arr = Array(arrayLength)

// This has exactly the same effect
let arr = []
arr.length = arrayLength



// In addition to a newly defined variable as shown above, arrays can also be assigned as a property of a new or an existing object:

let obj = {}
// ...
obj.prop = [element0, element1, ...elementN]

// OR
let obj = {prop: [element0, element1,  elementN]}