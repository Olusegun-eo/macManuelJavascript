let cohort8Native = ["tife", "dami", "yetunde", "femi"];

for (let countNative = 0; countNative < cohort8Native.length; countNative++) {
    const cohort9Native = cohort8Native[countNative];
    console.log(cohort9Native);
}

console.log();


for (key in cohort8Native){
    if (cohort8Native[key] !== "yetunde")
    console.log(cohort8Native[key]);
}


console.log()


let name =(nameee)=>{
    let newString =""
    for(let count = 0; count < nameee.length; count++){
        let eachString = nameee[count] + (count+1);
         newString = newString.concat(eachString)
            }
            return newString;
}
console.log(name("shaeed"))              


console.log()
console.log()

// Single threaded by nature



//Tools for Asynchronous operations:>>ONE==callBack func>>>Two==>Promises>>>>Asynnto
//setTimeout===> We use it to delay operation
// CALLBACK FUNCTION=
setTimeout(()=> {console.log("ozzy")}, 10);

console.log()
console.log()


let newArry = ["Taye","tife", "shola", "deola", "Jire", "Seyi", "suya"]
newArry.forEach(element => {
    // if(newArry[element] !== "T".toLowerCase)
    newArry[element]
});
console.log(newArry)



console.log()
console.log();


let details = {
    firstName: "Toye",
    lastName: "Precious",
    status: "Single",
    getFullName: function(anotherFunction){
         console.log(anotherFunction(this));
        // >>>"this" here is: >>> denote functure parameter to expect
        // But "this" connote the parameter will be a "Function or Object"
    }
}


// (obj) =>{} >>>>This is callBack Function>>>>
let newDetails = details.getFullName((obj) =>{ 
    let fullName = `${obj.firstName} ${obj.lastName}`;
    if(obj.status === "single") fullName = `Mr ${fullName}`;
        fullName = `Mrs ${fullName}`;
    return fullName;
})

// SELF INVOKING FUNCTION

/*
( function() {
    let x = "Hello!!";  // I will invoke myself
  }()); */
  
console.log()
console.log()

/*
function multiply(a, b) {
    b = typeof b !== 'undefined' ?  b : 1;
  
    return a * b;
  }
  
  multiply(5); // 5 */


  console.log()
  console.log();

  arrayA = [1, 2, 3, 4];
arrayB = [5, 6, 7, 8];

let mergeArrays = function(a, b, afunction){
    return afunction(arrayA, arrayB)
}

let afunction = function(a, b){
    let merge = arrayA.slice(0, a.length);
    return merge;
}
