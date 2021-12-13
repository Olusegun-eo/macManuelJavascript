function compareFunction(first, second) {
    return first - second;
}

var numbers = [4, 9, 1, 10, 5, 7, 0];

numbers.sort(compareFunction);
console.log(numbers)

console.log();
console.log();
// BOTH WORKS====> A AND B
let sortings = function (compareFunction) {

    function compareFunction(first, second) {
        return first - second;
    }
    
    var numbers = [4, 9, 1, 10, 5, 7, 0];
    return numbers.sort(compareFunction)
}
console.log(sortings())