let numArray = [1,2,3,4,5,6,7,8,9,10,11,12];


function multiply(x){
    for(let index = 1; index <= numArray.length; index++){
        console.log(`${x} * ${index} = ${x * index}`);    }
}


for(let count = 1; count <= numArray.length; count++){
    numArray.forEach(multiply);
}