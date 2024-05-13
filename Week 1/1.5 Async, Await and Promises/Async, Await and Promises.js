// ++++ 1.Async functions vs sync functions ++++

const { resolve } = require("path");

// synchronous: only one thing at a time.
// Asynchronous: Multiple Things are Context Switching with each other 

// synchronous: One after the other
// Asynchronous: Opposite of Synchronous, Happens in parts

// + synchronous vs Asynchronous functions +
// some commmon Async functions
// 1. setTimeout(), 
// 2. fs.readFile: to read a file from your file system
// 3. Fetch:s to fetch some data from API Endpoint

// 1. setTimeout() async function
function findSum(n) {
    let ans = 0;
    for (let i = 0; i<n; i++) {
      ans += i;
    }
    return ans;
  }
  
  function findSumTill100() {
    return console.log(findSum(100));
  }

function asyncDemo(){
    setTimeout(findSumTill100, 1000);
    console.log("hello world prints first!");
}

function syncDemo(){
    // Busy Waiting
    function syncSleep(){
        let a = 1;
    for(let i = 0; i <= 100; i++);
        a++;
    }
    syncSleep();
    findSumTill100();
    console.log("hello world prints last!");
}

// Just run functions one by one!
// syncDemo();
// asyncDemo();

// 2. fs.readFile() async function
function readFileDemo() {
    const fs = require("fs");
    // filesystem module
    
    fs.readFile("dummy.txt", "utf-8", function(err, data){
        console.log(data);
    })
    
    //2nd thread
    console.log("hi there: 2nd thread runs before");
    let a = 0;
    //takes very long, longer then the file read
    for(let i = 0; i < 1000000000; i++){
        a++;
    }
    console.log("hi there 2: 2nd thread still runs before")
}

// readFileDemo();

// ++++ real use of callbacks ++++
// real use of callbacks are in async functions mostly it is needed because of the web api and callback queue process

// ++++ JS Browser architecture ++++
// call Stack, web Api, callback queue, event loop



// ++++ Promises(then) ++++
// Promises are syntactical sugar that make the asynchronouos code slightly more readable
// its just the pretty way to write the Async code

// its just a wrapper on top of another async function, which is fine
// Usually all async functions you will write be on top of JS provided 
// async functions like setTimeout or fs.readFile

//-----
// +Example 1
// code Without Promise
function withoutPromise(){
    const fs = require('fs');

    // my own async function
    function rishabhReadFile(callback){
        fs.readFile("dummy.txt" , "UTF-8", function(err, data)
    {callback(data)});
    }
    
    // callback function to call
    function onDone(data){
        console.log(data);
    }
    
    rishabhReadFile(onDone);
}
// withoutPromise();

// same code With Promise
function withPromise(){
    const fs = require('fs');

    // my own async function
    function rishabhReadFile(){
        return new Promise(function(resolve){
            fs.readFile("dummy.txt", "UTF-8", function(err, data){
            resolve(data);});
        }
     );
    }

    // callback function to call
    function onDone(data){
        console.log(data);
    }

    rishabhReadFile().then(onDone);

} 
// withPromise();

// +Example 2
// code Without Promise
function withoutPromise2(){
    function setTime(time){
        setTimeout(time, 1000);
    }

    function msg(){
        console.log("om namah shivay");
    }

    setTime(msg);
}
// withoutPromise2();

// same code without Promise
function withProimise2(){
    function prom(){
        let p = new Promise(function(resolve){
           setTimeout(resolve, 1000);
        });
        return p;
    }

    let promiseExample = prom();
    promiseExample.then(function(){console.log("om namah shivay");});
}
// withProimise2();

// -------
// just an syntactical sugar still using callbacks under the hood
// What is an Promise really is?
// ans: its just a class that makes callbacks and async functions slightly more readable
// Syntax:
// first argument of Promise is should be a function(resolve){} and inside function the first argument should be resolve(you can name anything)
// 3 stages of Promise : pending, resolve and rejected
function promiseResolveDemo(){
    let promiseSyntax = new Promise(function(resolve){
    resolve("Rishabh");
    });

    function callback(){
        console.log(promiseSyntax);
    }

    console.log(promiseSyntax);
    promiseSyntax.then(callback);
}
// promiseResolveDemo();

function promisePendingDemo(){
    let promiseSyntax = new Promise(function(resolve){
    setTimeout(function(){resolve("Rishabh");}, 1000)
    });

    function callback(){
        console.log(promiseSyntax);
    }

    console.log(promiseSyntax);
    promiseSyntax.then(callback);
}
// promisePendingDemo();

// ++++ Async await ++++
// Again its just an syntactic sugar. stil uses callbacks/Promises under the hood Makes code 
// much more suitable more readable than callbacks/promises usually used on the caller side, 
// not on the side where you define an async function

// any function that wants to use await, needs to be async

// rather then using the .then syntax, we add await before and fet the final value in the variable


function nonAsyncFunction(){
    function rishabhNonAsyncFunction(){
        let p = new Promise(function(resolve){
            // do Async Logic Here
            resolve("hi there");
        });
        return p;
    }
    
    function main(){
        rishabhNonAsyncFunction().then(function(data){
            console.log(data);
        });
    }
    
    main();
}
// nonAsyncFunction();

function asyncFunction(){
    function rishabhAsyncFunction(){
        let p = new Promise(function(resolve){
            resolve("hi there");
        });
        return p;
    }
    
    async function main(){
        // const value = rishabhAsyncFunction(); //when you dont write it returns like promise itself
        const value = await rishabhAsyncFunction(); //when you put await it behaves like Async
        //or
        //rishabhAsyncFunction().then(function(data){console.log(data);}); it is same as above but its not await 

        console.log(value);
    }
    
    main();
}

asyncFunction();



