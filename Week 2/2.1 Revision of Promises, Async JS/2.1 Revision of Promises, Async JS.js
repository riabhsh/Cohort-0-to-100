// Three Big Humps in Full Stack
// 1. Async nature of Javascript
// 2. React 
// 3. JS to TS

// +++ 1. CALLBACKS +++
// We use callbacks for prevent DRY(Don't Repeat Yourself)
// When A function take a function as a parameter then we call this callback
// note: mostly callbacks is for Async

// EXAMPLES
function callbacksDemo(){

    function square(a){
        return a * a;
    }

    function cube(a){
        return a * a * a;
    }

    function sumOfTwoSquares(a, b){
        let n1 = square(a);
        let n2 = square(b);
       
        return n1 + n2;
    }

    function sumOfTwoCubes(a, b){
        let n1 = cube(a);
        let n2 = cube(b);
        
        return n1 + n2;
    }

    function sumOfSomething(a, b, callbackfn){
        let n1 = callbackfn(a);
        let n2 = callbackfn(b);

        return n1 + n2
    }

    console.log("+++ CAllBACK DEMO +++");
    // Without callback 
    console.log(sumOfTwoCubes(2,2));

    // With Callback you have to just write the third argument as function
    console.log(sumOfSomething(2, 2, cube));

}
// callbacksDemo();
// --------------------------

// +++ 2. Async Functions +++
// Your Javascript dosn't have access to everything immediately
// there are some tasks it needs to wait for example-
// 1. read a file
// 2. write a file 
// 3. sending newtwork request 
// 4. a delibrate timeout etc..

// setTimeout, readFile, setInterval etc.. webAPis functions that are provide by the browser or node js
// works out of from the Call Stack... i.e web Apis, callback Queue and eventloop then callback stack
// async inside async inside async so on and so forth is called CALLBACK

// EXAMPLES
function asyncDemo(){
    console.log("prints Before!");
    console.log("prints Before!");

    function text(){
        console.log("hi there!");
    }
    setTimeout(text, 1000);

    console.log("prints Before!");
    console.log("prints Before!");
}
// asyncDemo();

function asyncDemo2(){
    console.log("prints Before!");
    console.log("prints Before!");

    const fs = require('fs');
    
    fs.readFile("demo.txt", "utf-8", function(err, data){
        console.log(data);
    })

    console.log("prints Before!");
    console.log("prints Before!");
}
// asyncDemo2();
// --------------------------

// +++ 3. Promises(then) +++
// its just a syntactical sugar on top of Async
// it's a cleaner way of writing a Callbacks
// Under the hood Promises is converted into CallBacks


// --------------------------