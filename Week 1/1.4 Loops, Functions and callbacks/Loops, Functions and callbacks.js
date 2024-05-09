// DRY: Don't Repeat Yourself

// 1. Loops are the Solution for repeated Logic

// 2. Functions are also the Solution for repeated logic(piece of code)
// functions is a set of statements that performs a task or calculate a value
// it should take some input apply some logic and return an output where there is some obvious relation between the input and the output

// 3. Callbacks
// Passing Function as an argument

// can you call one function inside another function?
// yes
// example

// return sum of the squares of two numbers
let n1 = 2;
let n2 = 2;

function square(num){
    return num*num;
}

function cube(num){
    return num*num*num;
}


// solution 1 One Way but (DRY is Offended here)
function sumOfSquare(n1, n2){
    return square(n1) + square(n2);
}
function sumOfcube(n1, n2){
    return cube(n1) + cube(n2);
}

console.log(sumOfSquare(n1,n2));
console.log(sumOfcube(n1,n2));

// Solution 2 with callback
function someOfSomething(n1, n2, callback){
    console.log("");
    console.log(n1);
    console.log(n2);
    console.log(callback);
    return callback(n1) + callback(n2);
}

console.log(someOfSomething(n1, n2, square));
console.log(someOfSomething(n1, n2, cube));

// 4. Anonymous Functions: When We directly/Natively use the functions
// Example:

console.log(someOfSomething(n1, n2, 
    function(num){
    return num*num*num;})
);

// Anonymous function can't be use everywhere because of Scoping so dont put a name.