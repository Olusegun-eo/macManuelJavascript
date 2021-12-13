function a(num, multiplier) { 
    let x = num;
    for (let count= 1; count <= 12; count++) {
        multiplier(x,count); 
    }
}

console.log()

function multiply(x, count){
    let result = x * count;
    console.log(`${x} * ${count} = ${result}`);
}

console.log()

function addition(x, count){
    let result = x + count;
    console.log(`${x} + ${count} = ${result}`);
}

console.log()

for (let i= 0; i<=12; i++) {
    a(i, multiply)
}

console.log()

for (let i= 0; i<=12; i++) {
    a(i, addition)
}