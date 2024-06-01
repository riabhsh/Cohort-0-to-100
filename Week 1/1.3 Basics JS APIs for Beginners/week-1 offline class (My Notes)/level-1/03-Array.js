// Array Methods
// push(), pop(), shift(), unshift(), concat(), foreach(), map(), filter, find(), sort()

let initialArray = [1, 2, 3, 4, 5];
let secondArray = [11, 22, 33, 44, 55];

// 1. push
function pushExample(arr, element){
    console.log("\n1. push()");
    console.log("Before:", arr);
    arr.push(element);
    console.log("After:", arr);
}

pushExample(initialArray, 4);

// 2. pop
function popExample(arr){
    console.log("\n2. pop()");
    console.log("Before:",arr);
    arr.pop();
    console.log("After:", arr);
}

popExample(initialArray);

// 3. shift
// it just pops the first element
function shiftExample(arr){
    console.log("\n3. shift()");
    console.log("Before:",arr);
    arr.shift();
    console.log("After:",arr);
}

shiftExample(initialArray);

//4. unshift
function unshiftExamole(arr, element){
    console.log("\n4. unshift()");
    console.log("Before:",arr);
    arr.unshift(element);
    console.log("After:",arr);
}

unshiftExamole(initialArray, 1);

// 5. concat
function concatExample(arr, sarr){
    console.log("\n5. concat()");
    console.log("Before:\narray 1:",arr, "\narray 2:", sarr);
    let cArr = arr.concat(sarr);
    console.log("\nAfter:",cArr);
}

concatExample(initialArray, secondArray);

// 6. forEach

function forEachExample(arr){
    console.log("\n6. forEach()");
    console.log("Before:",arr);
    console.log("\nAfter:");
    arr.forEach(function fn(item, index){
        console.log(item, "is in index of:", index);
    });
}

forEachExample(secondArray);
