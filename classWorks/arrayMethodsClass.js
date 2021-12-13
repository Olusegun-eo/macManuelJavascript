let objArray = [
    {firstName: 'John',  lastName: 'Smith', gender: 'Female'},
    {firstName: 'Demola', lastName: 'Femi', gender: 'Male'},
    {firstName: 'Tife', lastName: 'Harry', gender: 'Male'}
];


let questions = objArray.forEach ( (question) => {
    let fName = question.firstName
    console.log(fName)
})
console.log( questions)
console.log()
console.log()


let questionTwo= objArray.map ( (question) =>{
    let fullName = `${question.firstName} ${question.lastName}`;
    let name = ` firstName: ${question.firstName} - secondName: ${question.lastName} - FullName: ${fullName}`
    return name;
})
console.log(questionTwo)
console.log()


let question_three = objArray.filter( (sex) =>{
   console.log(sex.gender === "male")
})



var Age = objArray.forEach( (add, index) => {
    let firstAdd = add.firstName;
    let lastAdd = add.lastName
   let age = firstAdd.length + lastAdd.length
    console.log(`age${index}: ${age}`)
})
console.log(Age)

