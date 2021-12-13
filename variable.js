for(var i=0; i<10; i++){
    let j = 1
console.log(`The value of i is: ${i-j}, WHILE j is: ${j}`)
}


// OBJECT CREATION >>>>..>FIRST METHOD

let Native = {
    name: "Taye",
    age: 36,
    email: "taye@gamil.com",
    hobby: "Footballing"
}


console.log(Native)



// OBJECT CREATION >>>>..>Second METHOD

let NativeTwo = new Object();
console.log(NativeTwo)


// OBJECT CREATION >>>>..>THIRD METHOD

function newNative(name, age, email, hobby) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.hobby = hobby;
}

let storeNative = new newNative("Taye", 23, "ty@gmail.com", "skating");
console.log(storeNative)


// WE RETRIEVE DATA FROM OBJECT BY >>>DOT NOTATION AND BRACKET NOTATION
let age = newNative.age
let ageb = newNative["age"];
console.log(age, ageb)

// console.log("The age One:   "+ age, "The age Two: ", ageb)




// WE UPDATE DATA FROM OBJECT BY >>>DOT NOTATION AND BRACKET NOTATION

console.log(newNative.age = 23)
console.log(newNative["age"] = 43)



// WE DELETE DATA FROM OBJECT BY >>>delete

delete newNative.hobby
console.log(newNative)


console.log("The keys:  "+Object.keys(newNative))
console.log("The Keys2:  "+Object.keys(storeNative))
console.log()
console.log("The values::  "+Object.values(storeNative))
console.log()
console.log("The entries:  "+Object.entries(storeNative))
console.log()
console.log()
console.log("The assign:  "+Object.assign(storeNative))
console.log();



let cohort8Native ={
    name: 'cohort8',
    hobby : "Reading",
    sizes : 30,
    fullName: " Semicolon Phoenix",

    getFullName : function() {
        return this.fullName;
    }
}

console.log(cohort8Native.getFullName())

let retunrFullname = cohort8Native.getFullName();
console.log(retunrFullname);


//INTRODUCTION TO KEY BINDING
// console.log(retunrFullname()) //for this to work, I have to apply bind keyWord to retunrFullname bcos...this does not recognize the parent

returnFullname = cohort8Native.getFullName.bind(cohort8Native)
console.log(returnFullname())

let firstName = "ozioma";
console.log(firstName.split(""))
console.log(firstName.split("o").slice(1))